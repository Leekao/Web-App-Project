import React from "react"
import axios from "axios"
import Button from "Components/Button"

class EmailConfirmation extends React.Component {
  state = {
    response: null,
  }

  resendEmail = () => {
    axios.defaults.withCredentials = true
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.props.token
    axios
      .get(`${process.env.BACKEND}/auth/resend-email`)
      .then(response => {
        this.setState({ response: "Email Sent!" })
      })
      .catch(error => {
        if (error.response) {
          // error originated from server
          if (error.response.data.error) {
            let errors = error.response.data.error.split("; ")
            this.setState({ errors: errors })
          }
        } else if (error.request) {
          // request made, no response though
        } else {
          // error was thrown during request setup
        }
      })
  }

  render() {
    return (
      <div className="emailConfirm">
        <div> We sent you an email.</div>
        <div> Please click on the link </div>
        <div className="resend_button">
          <div>
            &nbsp;
            <Button
              onClick={this.resendEmail}
              label="Resend"
              /> 
            &nbsp;
          </div>
        </div>
        <div className="response">{this.props.confirmation_sent}</div>
      </div>
    )
  }
}

export default EmailConfirmation
