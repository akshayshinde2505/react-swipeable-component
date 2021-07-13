export const styles = (theme) => ({
    card__container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        position: 'absolute',
        width: '600px',
        maxWidth: '80vw',
        height: '68vh',
        borderRadius: '10px',
        backgroundColor: '#e0e0e0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 1.0)',
        overflow: 'hidden',
    },
    card_shadow: {
        position: 'absolute',
        width: '600px',
        maxWidth: '80vw',
        height: '68vh',
        borderRadius: '10px',
        backgroundColor: '#e0e0e0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 1.0)',
        overflow: 'auto',
    },
    swipe: {
        position: 'absolute',
    },
    loadingCircle: {
        position: 'absolute',
        marginTop: '50%',
        marginLeft: '-8%',
        zIndex: 1,
    }
});
