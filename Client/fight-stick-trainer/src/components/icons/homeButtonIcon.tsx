import { baseIconStyles } from '.'
import { ControllerButtonIconProps, IControllerButtonStyles } from '../../types'
import { mergeStyleSets } from '@fluentui/react'

export function HomeButtonIcon({ styles }: ControllerButtonIconProps) {

    const defaultStyles: IControllerButtonStyles = {
        root: {
            color: 'white',
        }
    }
    const classes = mergeStyleSets(baseIconStyles, defaultStyles, styles);

    return <span className={classes.root}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden viewBox="0 0 512 512" role="img" preserveAspectRatio="xMidYMid meet">
            <defs>
                <style>{`.cls-1{fill:currentColor;}`}</style>
            </defs>
            <path className="cls-1" d="M307.8,164.5,290.14,181l15.75,20.19c30.35,38.93,64.26,97.54,74,128,1.26,3.93,2.26,7.67,3,11.14a152.25,152.25,0,0,0-36-206.68c-1.21.69-2.4,1.38-3.52,2.1C332.46,142.73,322.14,151.06,307.8,164.5Z" />
            <path className="cls-1" d="M298.76,251.28c-31.46-31.31-36.35-32.42-39.27-33.09-5.58-1.28-9.91.08-30.61,18.95C217,248,203.47,261.38,192.81,272.92c-17.43,18.88-43.34,49.48-56.53,77.41a152.3,152.3,0,0,0,240.1-.84c-8.3-17.15-21-35-32.85-49.81C332.46,285.83,313.15,265.59,298.76,251.28Z" />
            <path className="cls-1" d="M202.72,191l7.08-8.87L197,170.4c-16.9-15.59-29.15-25-39.93-30.37a152.23,152.23,0,0,0-34.43,189.91c.9-3.08,1.9-6.2,3-9.31C138.2,286.12,171.31,230.4,202.72,191Z" />
            <path className="cls-1" d="M236.85,138c14.61,7.56,15.51,7.73,17,8a11.16,11.16,0,0,0,2.12.26c2.5,0,6.14-1.39,19.53-8,19.23-9.54,37.25-15.56,51.24-17.27a152.21,152.21,0,0,0-141-.24c1.89.14,3.65.34,5,.58C201.92,123.26,223.48,131.06,236.85,138Z" />
        </svg>
    </span>
}