export const styles = (theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
        justifyContent: 'space-between',
        // marginTop: '0.5rem',
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        // maxWidth: '300px',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'arial',
    },
    title: {
        color: 'grey',
        // fontSize: '18px',
    },
    button: {
        border: 'none',
        outline: 0,
        display: 'inline-block',
        padding: '8px',
        color: 'white',
        backgroundColor: '#000',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
    },
    link: {
        textDecoration: 'none',
        // fontSize: '22px',
        color: 'black',
    },
    boxRotate: {
        transform: 'rotateY(180deg)',
        transition: 'transform 0.5s'
    },
    boxRotateOrg: {
        transform: 'rotateY(-180deg)',
        transition: 'transform 0.5s'
    }

});