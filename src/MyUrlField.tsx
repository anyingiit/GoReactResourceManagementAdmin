import { useRecordContext, TextFieldProps } from "react-admin";
import { FC } from "react";
import LaunchIcon from '@mui/icons-material/Launch'
import { Link } from "@mui/material";

const MyUrlField: FC<TextFieldProps> = ({ source }) => {
    const record = useRecordContext();
    if (!source) return null;
    return (
        <Link href={record[source]} sx={{ textDecoration: 'none' }}>
            {record[source]}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
    )
}

export default MyUrlField;