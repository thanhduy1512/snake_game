import React, { useState, useEffect } from 'react';
import './AudioControl.css';

const AudioControl = ({ isGameStarted }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [audioLoaded, setAudioLoaded] = useState(false);
    const [audio] = useState(() => {
        const audioElement = new Audio(`./audio.mp3`);
        audioElement.preload = 'auto';
        return audioElement;
    });

    useEffect(() => {
        const handleCanPlay = () => {
            console.log('Audio loaded successfully');
            setAudioLoaded(true);
            if (isGameStarted) {
                audio.play().catch(e => console.error('Error playing audio:', e));
            }
        };

        const handleError = (e) => {
            console.error('Error loading audio:', e);
            console.error('Audio source:', audio.src);
        };

        audio.addEventListener('canplaythrough', handleCanPlay);
        audio.addEventListener('error', handleError);

        audio.loop = true;
        return () => {
            audio.pause();
            audio.removeEventListener('canplaythrough', handleCanPlay);
            audio.removeEventListener('error', handleError);
        };
    }, [audio, isGameStarted]);

    useEffect(() => {
        if (audioLoaded) {
            if (isGameStarted && !isMuted) {
                audio.play().catch(e => console.error('Error playing audio:', e));
            } else {
                audio.pause();
            }
        }
    }, [isGameStarted, audioLoaded, isMuted, audio]);

    const toggleMute = () => {
        if (!audioLoaded) {
            console.warn('Audio not yet loaded');
            return;
        }

        if (isMuted) {
            audio.play().catch(e => console.error('Error playing audio:', e));
        } else {
            audio.pause();
        }
        setIsMuted(!isMuted);
    };

    return (
        <button className="audio-button" onClick={toggleMute}>
            {isMuted ? '🔇' : '🔊'}
        </button>
    );
};

export default AudioControl; 