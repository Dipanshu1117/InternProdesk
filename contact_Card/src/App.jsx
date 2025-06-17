import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ContactProvider } from "./context/ContactContext";

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <ContactProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 w-full">
          <h1 className="text-3xl font-bold mb-6">Contact Card App</h1>
            <div className="w-full max-w-xl space-y-6 flex flex-col items-center">

              <ContactForm />

              <button onClick={() => setShowList(!showList)} className="w-80 bg-purple-600 text-white py-2 rounded">
                {showList ? "Hide List" : "View List"}
              </button>

              {showList && <ContactList />}

            </div>
        </div>
      </ContactProvider>
    </div>

  );
}

export default App;
