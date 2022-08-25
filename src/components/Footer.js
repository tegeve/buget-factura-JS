import React from 'react'

export default function Footer({name,address,website,email,phone,bankName,account}) {
  return (
    <>
    <footer className="footer border-t-2 border-gray-300 pt-5">
    <ul className="flex fles-wrap items-center justify-center ">
        <li>
          <span className="font-bold">Your name: </span>{name}
          </li>
        <li>
          <span className="font-bold">Your email: </span>{email}
          </li>
        <li>
          <span className="font-bold">Phone number: </span>{phone}
        </li>
        <li>
          <span className="font-bold">Address: </span>{address}
          </li>
        <li>
          <span className="font-bold">Bank name: </span>{bankName}
          </li>
        <li>
          <span className="font-bold">Account Number: </span>{account}
          </li>
        <li>
          <span className="font-bold">Website: </span><a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
        </li>
    </ul>
    </footer>
    </>
  )
}
