import React from 'react';
import ReactDOM from 'react-dom';
import ol from 'openlayers';
import {addLocaleData, IntlProvider} from 'react-intl';
import UI from 'pui-react-buttons';
import Icon from 'pui-react-iconography';
import InfoPopup from './node_modules/boundless-sdk/js/components/InfoPopup.jsx';
import LayerList from './node_modules/boundless-sdk/js/components/LayerList.jsx'
import QGISLegend from './node_modules/boundless-sdk/js/components/QGISLegend.jsx';
import enLocaleData from './node_modules/react-intl/dist/locale-data/en.js';
import enMessages from './node_modules/boundless-sdk/locale/en.js';

addLocaleData(
  enLocaleData
);

var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });


var categories_geoforms = {
    "?": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(247,252,245,1.0)"
        })
    })],
    "Hill_111": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(233,246,228,1.0)"
        })
    })],
    "Hill_112": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(212,238,206,1.0)"
        })
    })],
    "Hill_211": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(187,228,180,1.0)"
        })
    })],
    "Hill_212": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(157,215,152,1.0)"
        })
    })],
    "Hill_311": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(122,199,123,1.0)"
        })
    })],
    "Hill_312": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(84,180,102,1.0)"
        })
    })],
    "Hill_411": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(53,158,83,1.0)"
        })
    })],
    "Plain_311": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(29,134,64,1.0)"
        })
    })],
    "Plain_411": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(0,109,44,1.0)"
        })
    })],
    "": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(0,68,27,1.0)"
        })
    })]
};
var categoriesSelected_geoforms = {
    "?": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Hill_111": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Hill_112": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Hill_211": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Hill_212": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Hill_311": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Hill_312": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Hill_411": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Plain_311": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "Plain_411": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })]
};
var textStyleCache_geoforms = {}
var clusterStyleCache_geoforms = {}
var style_geoforms = function(feature, resolution) {

    var value = feature.get("GEOFORM");
    var style = categories_geoforms[value];;
    var allStyles = [];

    allStyles.push.apply(allStyles, style);
    return allStyles;
};
var selectionStyle_geoforms = function(feature, resolution) {

    var value = feature.get("GEOFORM");
    var style = categoriesSelected_geoforms[value];
    var allStyles = [];

    allStyles.push.apply(allStyles, style);
    return allStyles;
};
var categories_landuse = {
    "agricultural_areas": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(166,97,26,1.0)"
        })
    })],
    "fishponds": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(211,174,105,1.0)"
        })
    })],
    "grasslands_pastures": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(236,224,197,1.0)"
        })
    })],
    "natural_forest": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(198,229,224,1.0)"
        })
    })],
    "urban_areas": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(102,190,177,1.0)"
        })
    })],
    "": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0,0,0,1.0)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(1,133,113,1.0)"
        })
    })]
};
var categoriesSelected_landuse = {
    "agricultural_areas": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "fishponds": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "grasslands_pastures": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "natural_forest": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "urban_areas": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })],
    "": [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(255, 204, 0, 1)",
            lineDash: null,
            width: 0
        }),
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 0, 1)"
        })
    })]
};
var textStyleCache_landuse = {}
var clusterStyleCache_landuse = {}
var style_landuse = function(feature, resolution) {

    var value = feature.get("LANDCOVER");
    var style = categories_landuse[value];;
    var allStyles = [];

    allStyles.push.apply(allStyles, style);
    return allStyles;
};
var selectionStyle_landuse = function(feature, resolution) {

    var value = feature.get("LANDCOVER");
    var style = categoriesSelected_landuse[value];
    var allStyles = [];

    allStyles.push.apply(allStyles, style);
    return allStyles;
};
var ranges_elevation = [
    [85.000000, 116.840000, [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(0,0,0,1.0)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(241,238,246,1.0)"
                })
            })
        })],
        [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(255, 204, 0, 1)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(255, 204, 0, 1)"
                })
            })
        })]
    ],
    [116.840000, 148.680000, [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(0,0,0,1.0)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(189,201,225,1.0)"
                })
            })
        })],
        [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(255, 204, 0, 1)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(255, 204, 0, 1)"
                })
            })
        })]
    ],
    [148.680000, 180.520000, [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(0,0,0,1.0)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(116,169,207,1.0)"
                })
            })
        })],
        [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(255, 204, 0, 1)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(255, 204, 0, 1)"
                })
            })
        })]
    ],
    [180.520000, 212.360000, [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(0,0,0,1.0)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(43,140,190,1.0)"
                })
            })
        })],
        [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(255, 204, 0, 1)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(255, 204, 0, 1)"
                })
            })
        })]
    ],
    [212.360000, 244.200000, [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(0,0,0,1.0)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(4,90,141,1.0)"
                })
            })
        })],
        [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 3.8,
                stroke: new ol.style.Stroke({
                    color: "rgba(255, 204, 0, 1)",
                    lineDash: null,
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "rgba(255, 204, 0, 1)"
                })
            })
        })]
    ]
];
var textStyleCache_elevation = {}
var clusterStyleCache_elevation = {}
var style_elevation = function(feature, resolution) {

    var value = feature.get("VALUE");
    var style = ranges_elevation[0][2];
    for (var i = 0; i < ranges_elevation.length; i++) {
        var range = ranges_elevation[i];
        if (value > range[0] && value <= range[1]) {
            style = range[2];
            break;
        }
    };
    var allStyles = [];

    allStyles.push.apply(allStyles, style);
    return allStyles;
};
var selectionStyle_elevation = function(feature, resolution) {

    var value = feature.get("VALUE");
    var style = ranges_elevation[0][3];
    for (var i = 0; i < ranges_elevation.length; i++) {
        var range = ranges_elevation[i];
        if (value > range[0] && value <= range[1]) {
            style = range[3];
            break;
        }
    };
    var allStyles = [];

    allStyles.push.apply(allStyles, style);
    return allStyles;
};
var baseLayers = [];
var baseLayersGroup = new ol.layer.Group({
    showContent: true,
    'type': 'base-group',
    'title': 'Base maps',
    layers: baseLayers
});
var lyr_geoforms = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: './data/lyr_geoforms.json'
    }),

    style: style_geoforms,
    selectedStyle: selectionStyle_geoforms,
    title: "geoforms",
    id: "geo20130827100512660",
    filters: [],
    timeInfo: null,
    isSelectable: true,
    popupInfo: ""
});
var lyr_landuse = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: './data/lyr_landuse.json'
    }),

    style: style_landuse,
    selectedStyle: selectionStyle_landuse,
    title: "landuse",
    id: "land20130827095302025",
    filters: [],
    timeInfo: null,
    isSelectable: true,
    popupInfo: ""
});
var lyr_elevation = new ol.layer.Vector({
    opacity: 1.0,
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: './data/lyr_elevation.json'
    }),

    style: style_elevation,
    selectedStyle: selectionStyle_elevation,
    title: "elevation",
    id: "pt120130827095302041",
    filters: [],
    timeInfo: null,
    isSelectable: true,
    popupInfo: ""
});
var group_geo_landuse = new ol.layer.Group({
    layers: [lyr_geoforms, lyr_landuse],
    showContent: true,
    title: "geo_landuse"
});

lyr_geoforms.setVisible(true);
lyr_landuse.setVisible(true);
lyr_elevation.setVisible(true);
var layersList = [group_geo_landuse, lyr_elevation];
var legendData = {
    "geo20130827100512660": [{
        "href": "0_0.png",
        "title": "?"
    }, {
        "href": "0_1.png",
        "title": "Hill_111"
    }, {
        "href": "0_2.png",
        "title": "Hill_112"
    }, {
        "href": "0_3.png",
        "title": "Hill_211"
    }, {
        "href": "0_4.png",
        "title": "Hill_212"
    }, {
        "href": "0_5.png",
        "title": "Hill_311"
    }, {
        "href": "0_6.png",
        "title": "Hill_312"
    }, {
        "href": "0_7.png",
        "title": "Hill_411"
    }, {
        "href": "0_8.png",
        "title": "Plain_311"
    }, {
        "href": "0_9.png",
        "title": "Plain_411"
    }, {
        "href": "0_10.png",
        "title": ""
    }],
    "pt120130827095302041": [{
        "href": "2_0.png",
        "title": "85.0-116.84"
    }, {
        "href": "2_1.png",
        "title": "116.84-148.68"
    }, {
        "href": "2_2.png",
        "title": "148.68-180.52"
    }, {
        "href": "2_3.png",
        "title": "180.52-212.36"
    }, {
        "href": "2_4.png",
        "title": "212.36-244.2"
    }],
    "land20130827095302025": [{
        "href": "1_0.png",
        "title": "agricultural_areas"
    }, {
        "href": "1_1.png",
        "title": "fishponds"
    }, {
        "href": "1_2.png",
        "title": "grasslands_pastures"
    }, {
        "href": "1_3.png",
        "title": "natural_forest"
    }, {
        "href": "1_4.png",
        "title": "urban_areas"
    }, {
        "href": "1_5.png",
        "title": ""
    }]
};
var view = new ol.View({
    center: [0, 0],
    zoom: 7,
    maxZoom: 32,
    minZoom: 1,
    projection: 'EPSG:3857'
});
var originalExtent = [2077900.572700, 5744234.968377, 2083473.973799, 5750636.469696];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: []
});



class App extends React.Component {
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    if (window.location.hash !== '') {
      var hash = window.location.hash.replace('#map=', '');
      var parts = hash.split('/');
      if (parts.length === 4) {
        var zoom = parseInt(parts[0], 10);
        var center = [
          parseFloat(parts[1]),
          parseFloat(parts[2])
        ];
        var rotation = parseFloat(parts[3]);
        view.setZoom(zoom);
        view.setCenter(center);
        view.setRotation(rotation);
      }
    }
    var shouldUpdate = true;
        var updatePermalink = function() {
          if (!shouldUpdate) {
            // do not update the URL when the view was changed in the 'popstate' handler
            shouldUpdate = true;
            return;
          }

          var center = view.getCenter();
          var hash = '#map=' +
              view.getZoom() + '/' +
              Math.round(center[0] * 100) / 100 + '/' +
              Math.round(center[1] * 100) / 100 + '/' +
              view.getRotation();
          var state = {
            zoom: view.getZoom(),
            center: view.getCenter(),
            rotation: view.getRotation()
          };
          window.history.pushState(state, 'map', hash);
        };

        map.on('moveend', updatePermalink);

        // restore the view state when navigating through the history, see
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
        window.addEventListener('popstate', function(event) {
          if (event.state === null) {
            return;
          }
          map.getView().setCenter(event.state.center);
          map.getView().setZoom(event.state.zoom);
          map.getView().setRotation(event.state.rotation);
          shouldUpdate = false;
        });
  }
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  }
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.refs.wrappedElement.setDimensionsOnState();
  }
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  }
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  }
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  }
  _toggleChartPanel() {
    this._toggle(document.getElementById('chart-panel'));
  }
  _navigationFunc() {
    LayerActions.activateTool(null, 'navigation');
  }
  render() {
    return (
      <article>
        <nav role='navigation'>
          <div className='toolbar'>
            
            <a className="navbar-brand" href="#">My Web App</a>
            
           </div>
        </nav>
        <div id='content'>
          <div id='map' ref='map'>
              
              <div id='popup' className='ol-popup'><InfoPopup map={map} hover={false}/></div>
          </div>
          <div id='layerlist'><LayerList showOpacity={false} showDownload={false}showGroupContent={true} showZoomTo={false} allowReordering={false} allowFiltering={true} map={map}/></div>
<div id='legend'><QGISLegend map={map} legendBasePath='./resources/legend/' legendData={legendData} pullRight/></div>
        </div>
      </article>
    );
  }
}

ReactDOM.render(<IntlProvider locale='en' messages={enMessages}><App /></IntlProvider>, document.getElementById('main'));
