import {
    BooleanField,
    Datagrid,
    DateField,
    FunctionField,
    Identifier,
    List,
    ReferenceManyField,
    Show,
    SimpleShowLayout,
    TextField,
    UrlField,
    UseGetListHookValue,
    useGetList,
    useRecordContext,
} from 'react-admin';
import { Stack, Typography, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ClearIcon from '@mui/icons-material/Clear';
import { render } from 'react-dom';

type TestResult = {
    id: Identifier;
    succeed: boolean;
    // 其他测试结果字段...
};

export const FastAction = () => {
    const record = useRecordContext();

    console.log(record);

    if (!record || !record.web_service_type) {
        return null;
    }

    const { web_service_type: webServiceType } = record;

    let renderedComponent: JSX.Element;

    switch (webServiceType) {
        case 'HTTP':
            renderedComponent = <UrlField source='url' record={{ url: `http://${record.host}:${record.port}` }} />;
            break;
        default:
            renderedComponent = <Typography>暂不支持</Typography>;

    }

    return renderedComponent;
}

export const WebServiceList = () => {
    const { data: testResults } = useGetList<TestResult>('user/services/web_service/results', {
        filter: { _sort: 'id', _order: 'desc', _limit: 5 },
        sort: { field: 'id', order: 'desc' },
    });



    return (
        <List>
            <Datagrid rowClick='show'>
                <TextField source='name' />
                <TextField source='description' />
                <TextField source='web_service_protocol' />

                <FunctionField label="Fast Action" render={(record: { web_service_protocol: string, host: string, port: number }) => {
                    let renderedComponent: JSX.Element;

                    switch (record.web_service_protocol) {
                        case 'HTTP':
                            renderedComponent = <UrlField source='url' record={{ url: `http://${record.host}:${record.port}` }} />;
                            break;
                        default:
                            renderedComponent = <Typography>暂不支持</Typography>;
                            break;
                    }

                    return renderedComponent;
                }} />

                <FunctionField label="最近5次测试结果" render={() => {
                    const isSuccess = testResults?.every((result) => result.succeed);

                    return (
                        <Stack direction='row' alignItems='center' justifyContent='flex-start' gap={1}>
                            {isSuccess ? (
                                <>
                                    <DoneIcon color='success' />
                                    <Typography>正常</Typography>
                                </>
                            ) : (
                                <>
                                    <ClearIcon color='error' />
                                    <Typography>错误</Typography>
                                </>
                            )}
                        </Stack>
                    )
                }} />
            </Datagrid>
        </List>
    );
}


export const WebServiceShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="service_id" />
            <TextField source='name' />
            <TextField source='description' />
            <TextField source='host' />
            <TextField source='port' />
            <TextField source='web_service_type' />
            <TextField source='web_service_protocol' />
            <ReferenceManyField label="Test Result" source="service_id" reference="user/services/web_service/results" target="service_id" sort={{ field: 'created_at', order: 'DESC' }}>
                <Datagrid bulkActionButtons={false}>
                    <BooleanField source='succeed' />
                    <DateField source="created_at" showTime />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);
