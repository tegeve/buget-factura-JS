import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Maindetails from "./components/Maindetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
function App() {
    const [showInvoice,setShowInvoice] = useState(false)
    const [name,setName] = useState("")
    const [address,setAddress] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [website,setWebsite] = useState("")
    const [bankName,setBankName] = useState("")
    const [account,setAccountNumber] = useState("")
    const [clientName,setClientName] = useState("")
    const [clientAddress,setClientAddress] = useState("")
    const [invoiceNumber,setInvoiceNumber] = useState("")
    const [invoiceDate,setinvoiceDate] = useState("")
    const [dueDate,setDueDate] = useState("")
    const [notes,setNotes] = useState("")
    const [description,setDescription] =useState("")
    const [quantity,setQuantity] = useState("")
    const [price,setPrice] = useState("")
    const [amount,setAmount] = useState("")
    const [list,setList] = useState([])
    const handlePrint = () => {
        window.print()
    }

  return (
  <>
  <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start" >
    {showInvoice ? 
    <div>
    <Header handlePrint={handlePrint}/>
    <Maindetails name={name}  address={address}/>
    <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
    <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
    <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList}/>
    <Notes notes={notes}/>
    <Footer name={name}  address={address} website={website} email={email} phone={phone} account={account} bankName={bankName}/>
    </div > :(
        <div className="flex flex-col justify-center">
         <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
                <label htmlFor="name">Enter you name: </label>
                <input type="text" name="text" id="name"  placeholder="Enter your name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="address">Enter you address: </label>
                <input type="text" name="address" id="address"  placeholder="Enter your address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
        </article>
        <article className="md:grid grid-cols-3 gap-10"> 
            <div className="flex flex-col">
                <label htmlFor="email">Enter you email: </label>
                <input type="email" name="email" id="email"  placeholder="Enter your email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="website">Enter you website: </label>
                <input type="url" name="website" id="website"  placeholder="Enter your website" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone">Enter you phone: </label>
                <input type="text" name="phone" id="phone"  placeholder="Enter your phone" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
        </article>
        <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
                <label htmlFor="bankName">Enter you bank name: </label>
                <input type="url" name="bankName" id="bankName"  placeholder="Enter your bankName" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="account">Enter you account: </label>
                <input type="url" name="account" id="account"  placeholder="Enter your account" autoComplete="off" value={account} onChange={(e) => setAccountNumber(e.target.value)}/>
            </div>
        </article>
        <article className="md:grid grid-cols-2 gap-10 md:mt-16">
            <div className="flex flex-col">
                <label htmlFor="clientName">Enter client name: </label>
                <input type="text" name="clientName" id="clientName"  placeholder="Enter client name" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="clientAddress">Enter client address: </label>
                <input type="text" name="clientAddress" id="clientAddress"  placeholder="Enter client address" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}/>
            </div>
        </article>
        <article className="md:grid grid-cols-3 gap-10 md:mt-20">
            <div className="flex flex-col">       
                <label htmlFor="invoiceNumber">Enter invoice number: </label>
                <input type="text" name="invoiceNumber" id="invoiceNumber"  placeholder="Enter invoice number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="invoiceDate">Enter invoice date: </label>
                <input type="date" name="invoiceDate" id="invoiceDate"  placeholder="Enter invoice date" autoComplete="off" value={invoiceDate} onChange={(e) => setinvoiceDate(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="dueDate">Due date: </label>
                <input type="date" name="dueDate" id="clientAddress"  placeholder="Due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
            </div>
        </article>
        <article>
            <TableForm 
            description={description} 
            setDescription={setDescription} 
            quantity={quantity} 
            setQuantity={setQuantity} 
            price={price} 
            setPrice={setPrice} 
            amount={amount} 
            setAmount={setAmount} 
            list={list} 
            setList={setList}/>
        </article>
        <label htmlFor="notes">Additional Notes: </label>
        <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
        <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Preview Invoice
            </button>
        </div>
    )}
  </main>
  </>
  );
}



export default App;
