import React from 'react';
import { compose } from "recompose"
import { withFirebase } from "../firebase"
import { withRouter } from "react-router-dom"
import AuthUserContext from "./context"
import * as ROUTES from "../constants/routes"

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
                if (!condition(authUser)) {
                    this.props.history.push(ROUTES.SIGN_IN)
                }
            })
        }
        componentWillUnmount() {
            this.listener()
        }
        render() {
            return <AuthUserContext.Consumer>
                {auth => condition(auth) ? <Component {...this.props} /> : null}
            </AuthUserContext.Consumer>
        }
    }
    return compose(withRouter, withFirebase)(WithAuthorization);
};
export default withAuthorization;