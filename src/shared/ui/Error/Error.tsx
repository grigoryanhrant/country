import {FC} from "react";

type ErrorProps = {
    errorText: string;
}

export const Error: FC<ErrorProps> = ({ errorText }) => {
    return (
        <div>
            {errorText}
        </div>
    );
};