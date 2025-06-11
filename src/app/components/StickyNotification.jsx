"use client";
import Image from "next/image";
import article from "../media/article.svg";

import { useState, useEffect } from "react";

export default function StickyNotification() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`notification-container ${isAnimated ? "show" : ""}`}>
      <div className="notification-card">
        <div className="notification-content">
          <div className="notification-icon">
            <Image className="icon" src={article} alt="image" fill />
          </div>

          <div className="notification-body">
            <p className="notification-description">
              <span className="green-dot" />
              Read article on{" "}
              <span className="bold-highlight">
                My Product Design Process
              </span>{" "}
              of job hiring platform
            </p>
            <a
              href="https://medium.com/@tahaashfaqmalik/product-design-process-xpertify-f6b081da4206"
              target="_blank"
              rel="noopener noreferrer"
              className="notification-cta"
            >
              Read now →
            </a>{" "}
          </div>

          <button
            className="notification-close"
            onClick={() => setIsVisible(false)}
            aria-label="Close notification"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .notification-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          max-width: 430px;
          transform: translateY(30px);
          opacity: 0;
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
        }
        .notification-icon {
          position: relative;
          width: 80px;
          height: 100px;
        }
        .bold-highlight {
          font-weight: 500;
          color: #01016a; /* Optional: Make it stand out */
        }

        .notification-container.show {
          transform: translateY(0);
          opacity: 1;
        }

        .notification-card {
          width: 430px;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          border: 1px solid #dadada;
          border-radius: 10px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.7s ease;
        }

        .notification-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          transform: scale(0.9);
          opacity: 0;
          border-radius: 10px;
          transition: opacity 0.5s ease,
            transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .notification-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #12009e, #00d2ff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .notification-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
        }

        .notification-card:hover::before {
          transform: scale(1);
          opacity: 1;
        }

        .notification-card:hover::after {
          transform: scaleX(1);
        }

        .notification-content {
          position: relative;
          padding: 20px;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 12px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .notification-card:hover .notification-content {
          transform: translateY(-5px);
        }

        .notification-icon {
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
            background-color 0.3s ease;
        }

        .notification-card:hover .notification-icon {
          transform: scale(1);
        }

        .notification-body {
          flex: 1;
          min-width: 0;
        }

        .notification-close {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          flex-shrink: 0;
          transition: color 0.3s ease, background-color 0.3s ease;
        }

        .notification-close:hover {
          color: #333;
          background: rgba(0, 0, 0, 0.05);
        }

        .notification-card:hover .notification-title {
          color: #3a7bd5;
          transform: translateY(-2px);
        }

        .notification-description {
          font-size: 14px;
          font-weight: 300;
          color: #33336b;
          line-height: 1.4;
          margin-bottom: 12px;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .notification-card:hover .notification-description {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .notification-cta {
          background: linear-gradient(135deg, #3a7bd5, #12009e);
          border: none;
          color: white;
          font-size: 10px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: 6px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 2px 8px rgba(58, 123, 213, 0.3);
        }

        .notification-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .notification-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(58, 123, 213, 0.4);
          background: linear-gradient(135deg, #4a8be5, #2010ae);
        }

        .notification-cta:hover::before {
          left: 100%;
        }

        .notification-cta:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(58, 123, 213, 0.3);
        }
        .green-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #00c853; /* Green accent */
          border-radius: 50%;
          margin-right: 6px;
          box-shadow: 0 0 6px #00c853;
          vertical-align: middle;
          animation: pulse 1.5s infinite;
        }

        @media (max-width: 768px) {
          .notification-icon {
    width: 50px;
    height: 70px;
  }
          .notification-container {
            right: 10px;
            bottom: 10px;
            max-width: calc(100vw - 20px);
          }

          .notification-card {
            width: 100%;
            min-width: 280px;
          }

          .notification-content {
            padding: 15px;
            gap: 10px;
          }

          .notification-icon {
            width: 80px;
            height: 80px;
          }

          .notification-title {
            font-size: 14px;
          }

          .notification-description {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
