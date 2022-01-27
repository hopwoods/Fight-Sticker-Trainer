import { baseIconStyles } from '.'
import { ControllerButtonIconProps, IControllerButtonStyles } from '../../types'
import { mergeStyleSets } from '@fluentui/react'

export function StartButtonIcon({ styles }: ControllerButtonIconProps) {

    const defaultStyles: IControllerButtonStyles = {
        root: {
            displayName: 'start-button-icon',
            color: 'Gainsboro',
        }
    }
    const classes = mergeStyleSets(baseIconStyles, defaultStyles, styles);

    return <span className={classes.root}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden viewBox="0 0 512 512" role="img" preserveAspectRatio="xMidYMid meet">
            <defs>
                <style>{`.cls-1{fill:currentColor;}`}</style>
            </defs>
            <path className="cls-1" d="M256,55.59C145.32,55.59,55.59,145.32,55.59,256S145.32,456.41,256,456.41,456.41,366.68,456.41,256,366.68,55.59,256,55.59Zm0,378.63c-98.27,0-178.22-80-178.22-178.22S157.73,77.78,256,77.78,434.22,157.73,434.22,256,354.27,434.22,256,434.22Z" />
            <path className="cls-1" d="M256,101.78C171,101.78,101.78,171,101.78,256S171,410.22,256,410.22,410.22,341,410.22,256,341,101.78,256,101.78Zm87.46,209.63H168.54v-20H343.46Zm0-47.05H168.54v-20H343.46Zm0-47H168.54v-20H343.46Z" />
        </svg>
    </span>
}