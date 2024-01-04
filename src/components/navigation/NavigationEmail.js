const NavigationEmail = () => {

  function sendEmai() {
    window.open(
      "mailto:mootassame@gmail.com?subject=SendMail&body=Description"
    );
  }
  return <p className='myemail-txt' onClick={sendEmai}>&lt; / mootassame@gmail.com &gt;</p>;
};

export default NavigationEmail;
