import React from 'react';
import {Card} from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className='pt-5 mt-2'>Contact me</h1>
      <table id='contact' className='m-auto'>
        <tr>
          <td>Email</td>
          <td>
            <Card body className='my-2'>
              <a href="mailto:padmaisuru@gmail.com">padmaisuru@gmail.com</a>
            </Card>
            <Card body className='my-2'>
              <a href="mailto:padmagnanapriya@gmail.com">padmagnanapriya@gmail.com</a>
            </Card>
          </td>
        </tr>
        <tr>
          <td>SMS</td>
          <td>
            <Card body className='my-2 my-1'>
              <a href="sms:+94766328189">+94 766 328 189</a>
            </Card>
          </td>
        </tr>
        <tr>
          <td>Call</td>
          <td>
            <Card body className='my-2 my-1'>
              <a href="tel:+94766328189">+94 766 328 189</a>
            </Card>
          </td>
        </tr>
        <tr>
          <td>WhatsApp</td>
          <td>
            <Card body className='my-2 my-1'>
              <a href="https://api.whatsapp.com/send?phone=+94766328189">+94 766 328 189</a>
            </Card>
          </td>
        </tr>
      </table>


    </React.Fragment>
  );
}
export default Contact;
