"use client";

import styles from "./page.module.css";
import BouncingBalls from './bouncingBalls';
import { Container, Title, SoundOption, SoundLabel, VolumeSlider, SoundGrid, Button, Background } from './styledComponents.js';

export default function Home() {
  return (
    <Container>
      <Background />
      <BouncingBalls />
      <Title>Ambient Sound Mixer</Title>
      <SoundGrid>
        <SoundOption>
          <SoundLabel>Rain</SoundLabel>
          <VolumeSlider />
        </SoundOption>
        <SoundOption>
          <SoundLabel>Ocean Waves</SoundLabel>
          <VolumeSlider />
        </SoundOption>
        <SoundOption>
          <SoundLabel>Forest</SoundLabel>
          <VolumeSlider />
        </SoundOption>
        <SoundOption>
          <SoundLabel>Wind</SoundLabel>
          <VolumeSlider />
        </SoundOption>
        <SoundOption>
          <SoundLabel>Fireplace</SoundLabel>
          <VolumeSlider />
        </SoundOption>
        <SoundOption>
          <SoundLabel>Thunderstorm</SoundLabel>
          <VolumeSlider />
        </SoundOption>
        <SoundOption>
          <SoundLabel>Birds Chirping</SoundLabel>
          <VolumeSlider />
        </SoundOption>
        <SoundOption>
          <SoundLabel>River Stream</SoundLabel>
          <VolumeSlider />
        </SoundOption>
      </SoundGrid>
      <Button>Save Settings</Button>
    </Container>
  );
}
