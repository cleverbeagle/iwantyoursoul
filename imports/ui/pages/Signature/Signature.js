import React from 'react';
import SignaturePad from 'signature_pad';
import { Button } from 'react-bootstrap';

import './Signature.scss';

class Signature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSignature = this.getSignature.bind(this);
  }

  componentDidMount() {
    this.signaturePad = new SignaturePad(this.signaturePadTarget);
  }

  getSignature() {
    // Bingo. This gets you a PNG base64 data string. You can pass this to a Method on the server
    // which then relays it on to Amazon via the Amazon SDK's s3.putObject() method.
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
    // Pass the string as the Body property and set ContentEncoding to 'base64' and ContentType to
    // 'image/png' (this is the mime type).
    console.log(this.signaturePad.toDataURL());
    // Meteor.call('signature.upload', {}, (error, response) => {
    //   if (error) {
    //     Bert.alert(error.reason, 'danger');
    //   } else {
    //     Bert.alert('', 'success');
    //   }
    // });
  }

  render() {
    return (<div className="Signature">
      <h5>Just pop your signature in the box below. – Satan</h5>
      <canvas ref={signaturePadTarget => (this.signaturePadTarget = signaturePadTarget)} /> <br />
      <Button onClick={this.getSignature}>Complete Soul Sale</Button>
    </div>);
  }
}

Signature.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Signature;
