import _ from 'lodash';
import {FETCH_CLIENT_APPLICATION, CHANGE_STEP} from '../actions/client-application-actions';

function buildSections(element, fieldSections) {
    if (element.Tag === "page")
    {
        return element.Children.map((item) => {
            return buildSections(item, fieldSections);
        })
    }
    else if (element.Tag === "card")
    {
        const name = element.Name;
        const id = element.Children[0].Id;
        const properties = _.map(fieldSections[id].properties, function(value, key) { 
            return _.assign({'id': key},value);  
        });
        const fields = _.toArray(properties);
        return { name, id, fields };
    }
    return null;
}

function getFieldLabels(sections) {
    return _.map(sections,(section) => {
        return {
            'id' : section.id,
            'label': section.name,
            'value': section.id
        }
    });
}


export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_CLIENT_APPLICATION:
            // Replace if running against live web service:
            //const base = action.payload.data;
            const base = action.payload.application;
            
            const sections = buildSections(base.RootElement,base.FieldSections); 
            if (action.error)
                return state;
            return {...state, 
                logo: base.Logo, 
                fieldData: sections, 
                data: base.Data,
                activeStep: 0,
                steps: getFieldLabels(sections)
             };
        case CHANGE_STEP:
            const newState = {...state};
            newState.activeStep = action.payload.newStep;
            return newState;
        default:
            return state;
    }
};