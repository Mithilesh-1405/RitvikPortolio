import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import styled from 'styled-components';

const FullViewportContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: -1; 
`;

function Shader() {
    return (
        <FullViewportContainer>
            <ShaderGradientCanvas>
                <ShaderGradient
                    control='query'
                    urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%230c0400&color2=%231f0062&color3=%230045c4&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1.9&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=2.6&uFrequency=5.5&uSpeed=0.3&uStrength=1.1&uTime=0&wireframe=false'
                />
            </ShaderGradientCanvas>
        </FullViewportContainer>
    );
}

export default Shader;