      // Function to handle numeric key presses
      function handleNumericKeyPress(event) {
        if (event.key >= '0' && event.key <= '9') {
          const activeElement = document.activeElement;
          if (activeElement.tagName !== 'INPUT') {
            openForm();
          }
        }
      }
    
      document.addEventListener('keydown', handleNumericKeyPress);
    
      function openForm() {
        document.getElementById("whatsappForm").style.display = "block";
        focusPhoneNumberInput();
      }
    
      function closeForm() {
        document.getElementById("whatsappForm").style.display = "none";
      }
    
      function focusPhoneNumberInput() {
        const phoneNumberInput = document.querySelector("input[name='PhoneNumber']");
        phoneNumberInput.focus();
      }
    
      function sendWhatsAppMessage() {
        const countryCode = document.querySelector("input[name='countrycode']").value;
        let phoneNumber = document.querySelector("input[name='PhoneNumber']").value;
        phoneNumber = phoneNumber.replace(/^0+/, "");
        const whatsappWebLink = `https://web.whatsapp.com/send/?phone=${countryCode}${phoneNumber}&text&type=phone_number&app_absent=0`;
        window.open(whatsappWebLink, "_blank");
      }
    
      function openWhatsAppApp() {
        const countryCode = document.querySelector("input[name='countrycode']").value;
        let phoneNumber = document.querySelector("input[name='PhoneNumber']").value;
        phoneNumber = phoneNumber.replace(/^0+/, "");
        const whatsappAppLink = `https://wa.me/${countryCode}${phoneNumber}`;
        window.open(whatsappAppLink, "_blank");
      }
    
    // Add event listener for clicks on the anchor tag with id="openwhatsapp"
    document.getElementById("openwhatsapp").addEventListener("click", function() {
      const openButton = document.querySelector(".open-button");
      openButton.style.display = "block";
    });
    
    
      const appButton = document.querySelector(".btn_APP"); // Changed the selector to target the WhatsApp App button
      appButton.addEventListener("click", () => {
        openWhatsAppApp(); // Call the openWhatsAppApp() function
      });
    
      const sendButton = document.querySelector(".btn"); // Added listener for the Send Message button
      sendButton.addEventListener("click", () => {
        sendWhatsAppMessage(); // Call the sendWhatsAppMessage() function
      });