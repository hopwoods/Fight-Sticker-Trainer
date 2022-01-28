import { baseIconStyles } from '.'
import { ControllerButtonIconProps, IControllerButtonStyles } from '../../types'
import { mergeStyleSets } from '@fluentui/react'

export default function LeftTriggerIcon({ styles }: ControllerButtonIconProps) {

    const defaultStyles: IControllerButtonStyles = {
        root: {
            displayName: 'left-trigger-icon',
            color: 'Gainsboro',
        }
    }
    const classes = mergeStyleSets(baseIconStyles, defaultStyles, styles);

    return <span className={classes.root}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden viewBox="0 0 512 512" role="img" preserveAspectRatio="xMidYMid meet">
            <defs>
                <style>{`.cls-1{fill:currentColor;}`}</style>
            </defs>
            <path className="cls-1" d="M404.07,376.92a30.76,30.76,0,0,1-1.95-2.73c-60.72-96.54-25.86-219-17.11-245.72.92-2.79,15.68-30.76-13.66-35.17-2.54-.38-5-1.09-7.57-1.09H139.45a26.66,26.66,0,0,0-25,17.14c-17.16,45.89-14.79,123-14.45,131.94,0,.58.06,1.15.11,1.72C112.4,382.06,233.75,414.53,254.94,419.15a26.82,26.82,0,0,0,5.79.64H385.27a26.56,26.56,0,0,0,10.48-2.11C424.22,405.38,408.31,382.29,404.07,376.92ZM247.72,290.51h-70V192.63H200.3v78h47.42Zm68.93-78H286.87v78H264.26v-78H234.35V192.63h82.3Z" />
        </svg>
    </span>
}