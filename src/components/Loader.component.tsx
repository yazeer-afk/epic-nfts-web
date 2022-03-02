import { FC } from 'react'

export interface LoaderProps {

}

export const Loader: FC<LoaderProps> = (props) => {

    return (
        <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}