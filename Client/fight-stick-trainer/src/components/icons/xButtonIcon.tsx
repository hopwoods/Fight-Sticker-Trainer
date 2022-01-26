import { baseIconStyles } from '.'
import { ControllerButtonIconProps, IControllerButtonStyles } from '../../types'
import { mergeStyleSets } from '@fluentui/react'

export function XButtonIcon({ styles }: ControllerButtonIconProps) {

    const defaultStyles: IControllerButtonStyles = {
        root: {
            color: 'CornflowerBlue',
        }
    }

    const classes = mergeStyleSets(baseIconStyles, defaultStyles, styles);

    return <span className={classes.root}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden viewBox="0 0 512 512" role="img" preserveAspectRatio="xMidYMid meet">
            <path d="M256,103.51c-84.08,0-152.49,68.41-152.49,152.49S171.92,408.49,256,408.49,408.49,340.08,408.49,256,340.08,103.51,256,103.51Zm72.6,241.23h-34l-38.35-59.93-38.59,59.93H183.4l55.93-82.58-57.76-84.94h34.25l40.41,62.29,40.18-62.29h34l-57.76,84.94Z" fill="currentColor" />
        </svg>
    </span>
}