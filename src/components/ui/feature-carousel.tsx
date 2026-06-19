"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import "./feature-carousel.css";

// --- TYPES ---
export interface CardItem {
  imgUrl: string;
  alt?: string;
  linkUrl?: string;
}

export interface FeatureCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  cards?: CardItem[];
  images?: { src: string; alt: string; }[];
  title?: React.ReactNode;
  subtitle?: string;
}

// Sub-component for individual carousel slide
interface CarouselVideoCardProps {
  card: CardItem;
  pos: number;
  isCenter: boolean;
  onCardClick: () => void;
}

const CarouselVideoCard: React.FC<CarouselVideoCardProps> = ({ card, pos, isCenter, onCardClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Parse title and category from alt text
  const parseAltText = (altText?: string) => {
    if (!altText) return { title: "Cinematic Project", category: "Video Edit" };
    const match = altText.match(/^(.*?)\s*\((.*?)\)$/);
    if (match) {
      return { title: match[1].trim(), category: match[2].trim() };
    }
    return { title: altText.trim(), category: "Cinematic Work" };
  };

  const { title, category } = parseAltText(card.alt);

  // Play muted video when slide is center or adjacent (to make them play inline as requested)
  // Stop and reset video when slide moves out of view (Math.abs(pos) > 1) to conserve CPU
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Math.abs(pos) <= 1) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silent catch to handle browser autoplay restriction if any
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [pos]);

  return (
    <div
      className={`carousel-slide ${isCenter ? "center-slide" : ""}`}
      style={{
        transform: `
          translateX(${pos * 115}%) 
          scale(${isCenter ? 1.0 : Math.abs(pos) === 1 ? 0.82 : 0.65})
          rotateY(${pos * -12}deg)
        `,
        zIndex: isCenter ? 10 : 5 - Math.abs(pos),
        opacity: isCenter ? 1 : Math.abs(pos) === 1 ? 0.55 : 0,
        filter: isCenter ? "blur(0px)" : "blur(4px)",
        visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
      }}
    >
      {/* 100% transparent click overlay capturing events reliably in all layouts */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onCardClick();
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 15,
          cursor: isCenter ? "pointer" : "grab",
        }}
      />

      <div className="carousel-video-container">
        {card.linkUrl ? (
          <video
            ref={videoRef}
            src={card.linkUrl}
            poster={card.imgUrl}
            className="carousel-video"
            muted
            playsInline
            loop
            preload="metadata"
          />
        ) : (
          <img
            src={card.imgUrl}
            alt={card.alt || title}
            className="carousel-video object-cover"
          />
        )}

        {/* Play Icon overlay visible on hover for center card */}
        {isCenter && card.linkUrl && (
          <div className="carousel-play-overlay">
            <Play size={20} fill="#fff" />
          </div>
        )}
      </div>

      {/* Info Tag overlay */}
      <div className="carousel-slide-overlay">
        <span className="carousel-slide-category">{category}</span>
        <h4 className="carousel-slide-title">{title}</h4>
      </div>
    </div>
  );
};

// Helper component to programmatically force load and play inside the lightbox modal
const LightboxVideo: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log("Programmatic play failed, waiting for user interaction:", err);
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="lightbox-video"
      controls
      autoPlay
      playsInline
      preload="auto"
    />
  );
};

// --- MAIN CAROUSEL COMPONENT ---
export const FeatureCarousel = React.forwardRef<HTMLDivElement, FeatureCarouselProps>(
  ({ cards, images, title, subtitle, className, ...props }, ref) => {
    // Map props: support both `cards` and `images` arrays for versatility
    const carouselItems = cards || (images ? images.map(img => ({
      imgUrl: img.src,
      alt: img.alt,
      linkUrl: ""
    })) : []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxVideo, setLightboxVideo] = useState<CardItem | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Initialize starting index in the center of the list
    useEffect(() => {
      if (carouselItems.length > 0) {
        setCurrentIndex(Math.floor(carouselItems.length / 2));
      }
    }, [carouselItems.length]);

    const handleNext = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, [carouselItems.length]);

    const handlePrev = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    }, [carouselItems.length]);

    // Drag / Touch gestures ref tracking
    const dragStartX = useRef<number | null>(null);
    const hasDragged = useRef(false);

    const handlePointerDown = (e: React.PointerEvent) => {
      dragStartX.current = e.clientX;
      hasDragged.current = false;
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (dragStartX.current === null) return;
      const diffX = e.clientX - dragStartX.current;
      // Increased threshold to 25px to prevent slight mouse movements during clicks from blocking the modal
      if (Math.abs(diffX) > 25) {
        hasDragged.current = true;
      }
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      if (dragStartX.current === null) return;
      const diffX = e.clientX - dragStartX.current;
      dragStartX.current = null;

      // Swipe threshold: 50px
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          handlePrev();
        } else {
          handleNext();
        }
      }
    };

    const handleCardClick = (index: number) => {
      if (hasDragged.current) {
        // Prevent lightbox if it was a swipe/drag action
        return;
      }

      if (carouselItems[index].linkUrl) {
        // Immediately open the clicked card's video in the cinematic lightbox
        setLightboxVideo(carouselItems[index]);
        // Simultaneously center the card in the background for consistency
        setCurrentIndex(index);
      }
    };

    // Auto-play interval: 2 seconds, paused on hover or lightbox open
    useEffect(() => {
      if (isHovered || lightboxVideo !== null || carouselItems.length === 0) return;

      const timer = setInterval(() => {
        handleNext();
      }, 2000);

      return () => clearInterval(timer);
    }, [handleNext, isHovered, lightboxVideo, carouselItems.length]);

    // Escape key listener to close fullscreen modal
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setLightboxVideo(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    if (carouselItems.length === 0) return null;

    return (
      <div
        ref={ref}
        className={`hero-section ${className || ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Ambient background glows */}
        <div className="carousel-glow left" aria-hidden="true" />
        <div className="carousel-glow right" aria-hidden="true" />

        {/* Content */}
        <div className="carousel-container">
          {title || subtitle ? (
            <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              {title && <div style={{ marginBottom: "0.5rem" }}>{title}</div>}
              {subtitle && <p style={{ color: "rgba(234, 229, 236, 0.6)" }}>{subtitle}</p>}
            </div>
          ) : null}

          {/* 3D Showcase */}
          <div
            className="carousel-wrapper"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {carouselItems.map((card, index) => {
              // Calculate offset index relative to the centered card
              const offset = index - currentIndex;
              const total = carouselItems.length;
              let pos = (offset + total) % total;
              if (pos > Math.floor(total / 2)) {
                pos = pos - total;
              }

              const isCenter = pos === 0;

              return (
                <CarouselVideoCard
                  key={index}
                  card={card}
                  pos={pos}
                  isCenter={isCenter}
                  onCardClick={() => handleCardClick(index)}
                />
              );
            })}

            {/* Navigation Buttons (Desktop only - hidden on mobile) */}
            <button
              type="button"
              className="carousel-nav-btn left-btn"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              className="carousel-nav-btn right-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="carousel-pagination">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Fullscreen Cinematic Lightbox */}
        {lightboxVideo && (
          <div className="carousel-lightbox" onClick={() => setLightboxVideo(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxVideo(null)}
                aria-label="Close fullscreen preview"
              >
                <X size={20} />
              </button>
              
              <LightboxVideo src={lightboxVideo.linkUrl || ""} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

FeatureCarousel.displayName = "FeatureCarousel";
export const HeroSection = FeatureCarousel;
