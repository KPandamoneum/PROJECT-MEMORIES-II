import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        marigin: '0px !important',
    },

    appBar: {
        borderRadius: 15,
        margin: '0px 0px 10px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        }
    }
}));