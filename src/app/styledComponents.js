import styled, { keyframes } from 'styled-components';

// Keyframe animations
const ballBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 244, 248, 0.8);
  z-index: 1;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const SoundOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

export const SoundLabel = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const VolumeSlider = styled.input.attrs({ type: 'range' })`
  width: 80%;
  margin: 10px 0;
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  background: #d3d3d3;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;

    &:hover {
      background: #0056b3; /* Darker shade on hover */
    }
  }
`;

export const SoundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  z-index: 2; /* Ensure it appears above the background */
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;
