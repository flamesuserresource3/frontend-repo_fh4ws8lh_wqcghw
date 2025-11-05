import React, { useCallback } from 'react';
import Spline from '@splinetool/react-spline';

/**
 * An interactive 3D scene using Spline. Clickable objects in the scene
 * can be detected by their "name" and bubbled up via onSelect.
 */
export default function FactoryScene({ onSelect, sceneUrl, className = '' }) {
  const handleLoad = useCallback((spline) => {
    if (!spline) return;
    // Attach mouseDown listener to capture clicked objects by name
    try {
      spline.addEventListener('mouseDown', (e) => {
        if (!e) return;
        const target = e.target;
        if (target && target.name && typeof onSelect === 'function') {
          onSelect(target.name);
        }
      });
    } catch (err) {
      // noop - if events are unsupported, scene still renders
    }
  }, [onSelect]);

  const url = sceneUrl || 'https://prod.spline.design/6aK6lJzi10BGSA2g/scene.splinecode';

  return (
    <section id="scene" className={`relative w-full ${className}`}>
      <div className="relative h-[70vh] w-full rounded-xl overflow-hidden border border-slate-200">
        <Spline scene={url} onLoad={handleLoad} style={{ width: '100%', height: '100%' }} />

        {/* Gradient overlay for legibility without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30" />

        {/* Instruction badge */}
        <div className="pointer-events-none absolute left-4 bottom-4 bg-white/80 backdrop-blur px-3 py-2 rounded-md shadow border border-slate-200 text-slate-700 text-sm">
          Click parts of the factory model to see details
        </div>
      </div>
    </section>
  );
}
