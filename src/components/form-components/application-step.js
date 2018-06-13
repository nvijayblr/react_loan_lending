import React from 'react';

import { connect } from 'react-redux';

class ApplicationStep extends React.Component {
    render() {
        return (
            <div>content</div>
        );
    }
}
function mapStateToProps({application: { fieldData, activeStep }}) {
    console.log(fieldData);
    console.log(activeStep);
    return {page: fieldData[activeStep]};
}
export default connect(mapStateToProps)(ApplicationStep);