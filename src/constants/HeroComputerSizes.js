export const calculateSizes = ({
                                   isSmallPhone,
                                   isLargePhone,
                                   isTabletPortrait,
                                   isTabletLandscape,
                               }) => {
    if (isSmallPhone) {
        return {
            computerScale: 0.07,
            computerPosition: [0, 1, 0],
            computerRotation: [0.3, 0, 0],
        };
    }

    if (isLargePhone) {
        return {
            computerScale: 0.1,
            computerPosition: [0, 2, 0],
            computerRotation: [0.3, 0, 0],
        };
    }

    if (isTabletPortrait) {
        return {
            computerScale: 0.1,
            computerPosition: [0, 2.0, 0],
            computerRotation: [0.3, 0, 0],
        };
    }

    if (isTabletLandscape) {
        return {
            computerScale: 0.11,
            computerPosition: [0, -5, 0],
            computerRotation: [0.3, 0, 0],
        };
    }

    // Desktop
    return {
        computerScale: 0.2,
        computerPosition: [0, -1, 0],
        computerRotation: [0.3, 0, 0],
    };
};
