import ModalClock from '../components/ModalClock'
import { connect } from 'react-redux'
import { pauseOrStatrTime } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pauseOrStatrTime
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(ModalClock)