export const calculateSizes = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    let scale;
    if (width <= 440) {
        scale = 0.07;
    } else if (width <= 767) {
        scale = 0.08 + (width - 440) * (0.02 / 327);
    } else if (width <= 1023) {
        scale = 0.1 + (width - 768) * (0.02 / 255);
    } else {
        scale = Math.min(0.2, 0.12 + (width - 1024) * (0.08 / 476));
    }

    let positionY;
    if (height <= 700) {
        positionY = aspectRatio > 1 ? -3 : 1;
    } else if (height <= 900) {
        positionY = aspectRatio > 1 ? -2 : 2;
    } else {
        positionY = aspectRatio > 1 ? -1 : 2.5;
    }

    const rotationX = width <= 767 ? 0.3 : 0.25;

    return {
        computerScale: scale,
        computerPosition: [0, positionY, 0],
        computerRotation: [rotationX, 0, 0],
    };
};