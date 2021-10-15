import React, {useRef, useLayoutEffect} from "react";
import {makeStyles} from "@material-ui/core/styles"
import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

// am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);


const useStyles = makeStyles((theme) =>({
    wrap: {
        position:"absolute",
        top:"-300px",
        left:"0px",
        width:"100%",
        height:"800px",
        [theme.breakpoints.down("sm")]: {
            position:"relative",
            width:"100%",
            height:"400px",
            top:"0"
        },
    }
}))
const Skills = (props) => {
    const classes = useStyles()

    const cht = useRef(null)

    useLayoutEffect(() => {
        let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
        
        var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

            chart.data = [
            {
                name: "Front_End",
                children: [
                {
                    name: "React.js",
                    children: [
                    { name: "Redux", value: 500 },
                    { name: "MUI", value: 300 },
                    ]
                },
                {
                    name: "Vue.js",
                    children: [
                    { name: "Vuex", value: 400 },
                    { name: "Vuetify", value: 400 },
                    ]
                },
                {
                    name: "Node.js",
                    children: [
                    { name: "express", value: 500 },
                    ]
                },
                {
                    name: "UI/UX",
                    children: [
                    { name: "Figma", value: 500 },
                    ]
                },
                ]
            }
            ];

            networkSeries.dataFields.value = "value";
            networkSeries.dataFields.name = "name";
            networkSeries.dataFields.children = "children";
            networkSeries.nodes.template.tooltipText = "{name}:{value}";
            networkSeries.nodes.template.fillOpacity = 1;

            networkSeries.nodes.template.label.text = "{name}"
            networkSeries.fontSize = 10;

            networkSeries.links.template.strokeWidth = 1;

            var hoverState = networkSeries.links.template.states.create("hover");
            hoverState.properties.strokeWidth = 3;
            hoverState.properties.strokeOpacity = 1;

            networkSeries.nodes.template.events.on("over", function(event) {
                event.target.dataItem.childLinks.each(function(link) {
                    link.isHover = true;
                })
                if (event.target.dataItem.parentLink) {
                    event.target.dataItem.parentLink.isHover = true;
                }
            })

            networkSeries.nodes.template.events.on("out", function(event) {
                event.target.dataItem.childLinks.each(function(link) {
                    link.isHover = false;
                })
                if (event.target.dataItem.parentLink) {
                    event.target.dataItem.parentLink.isHover = false;
                }
            })
    
        cht.current = chart

        return () => {
          chart.dispose();
        };

      }, []);

    return (
        <React.Fragment>
            <div style={{position:"relative", width:"100%", height:"100%"}}>
                <div id="chartdiv" className={classes.wrap}></div>
            </div>
        </React.Fragment>
    )
}

export default Skills