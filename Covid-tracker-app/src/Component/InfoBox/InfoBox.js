import React from 'react';
import {
    Typography,
    Card,
    CardContent,
  } from "@material-ui/core";

const InfoBox = ({ title, cases, total }) => {
    return (
        <Card>
            <CardContent>
                {/* Title */}
                <Typography color="textSecondary" className="infoBoxe__title">{title}</Typography>
               
                {/* +120K Number of Cases */}
                <h2 className="infoBoxe__cases">{cases}</h2>
                
                {/* 1.2M Total */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox;
