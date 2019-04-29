import React from 'react'

const Paypal = props => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <br />
      <input name="hosted_button_id" type="hidden" value={props.paypalID} />
      <br />
      <input
        alt="PayPal - The safer, easier way to pay online!"
        name="submit"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        type="image"
      />
    </form>
  )
}

export { Paypal }
