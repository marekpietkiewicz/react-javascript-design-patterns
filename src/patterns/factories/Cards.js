import React from 'react';
// import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppCss from './../../App.css.js';
import clsx from 'clsx';
// import usePrev from './../../customHooks';
import A from './A';
import _ from 'lodash';

const TabElement = (props) => {
    const { text, fixedHeightPaper } = props;

    return (
        <Grid item xs={6} md={6} lg={6}>
            <Paper className={fixedHeightPaper.fixedHeightPaper}>
                {text}
            </Paper>
        </Grid>
    )
}

const B = (fixedHeightPaper) => {
    // console.log("Rendered b");
    return <TabElement text={"Type B Component"} fixedHeightPaper={fixedHeightPaper} />
}

const C = (fixedHeightPaper) => {
    // console.log("Rendered c");
    return <TabElement text={"Type C Component"} fixedHeightPaper={fixedHeightPaper} />
}

const D = (fixedHeightPaper) => {
    // console.log("Rendered d");
    return <TabElement text={"Type D Component"} fixedHeightPaper={fixedHeightPaper} />
}


const useStyles = makeStyles((theme) => (AppCss(theme)));



const Factory = (props) => {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    // const prevProps = usePrev(props);
    // const nextProps = props;

    // const areEqual = (prevProps, nextProps) => {
        
    //     console.log(nextProps)
    // };

    // areEqual()

    switch (props.component.type) {
        case "A":
            return <A text={"Type A Component"} fixedHeightPaper={fixedHeightPaper} />;
        case "B":
            return <A text={"Type B Component"} fixedHeightPaper={fixedHeightPaper} />;
            // return <B fixedHeightPaper={fixedHeightPaper} />;
        case "C":
            return <C fixedHeightPaper={fixedHeightPaper} />;
        case "D":
            return <D fixedHeightPaper={fixedHeightPaper} />;
        default:
            return <div>Reload...</div>;
    }
}


const areEqual = (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
};

export default React.memo(Factory, areEqual);