import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { useState } from 'react';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }

  const [listingTitle, setListingTitle] = useState('');
  const [listingDescription, setListingDescription] = useState('');
  const [listingPrice, setListingPrice] = useState('');
  const [portfolioTitle, setPortfolioTitle] = useState('');
  const [portfolioImageUrl, setPortfolioImageUrl] = useState('');
  const [portfolioDescription, setPortfolioDescription] = useState('');

  const handleAddListing = async (e) => {
    e.preventDefault();
    await fetch('/api/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: listingTitle, description: listingDescription, price: Number(listingPrice) }),
    });
    setListingTitle(''); setListingDescription(''); setListingPrice('');
  };

  const handleAddPortfolio = async (e) => {
    e.preventDefault();
    await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: portfolioTitle, imageUrl: portfolioImageUrl, description: portfolioDescription }),
    });
    setPortfolioTitle(''); setPortfolioImageUrl(''); setPortfolioDescription('');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.email}</p>

      <h2>Add Listing</h2>
      <form onSubmit={handleAddListing}>
        <input value={listingTitle} onChange={(e) => setListingTitle(e.target.value)} placeholder="Title" required />
        <input value={listingDescription} onChange={(e) => setListingDescription(e.target.value)} placeholder="Description" required />
        <input value={listingPrice} onChange={(e) => setListingPrice(e.target.value)} placeholder="Price" type="number" required />
        <button type="submit">Add Listing</button>
      </form>

      <h2>Add Portfolio Item</h2>
      <form onSubmit={handleAddPortfolio}>
        <input value={portfolioTitle} onChange={(e) => setPortfolioTitle(e.target.value)} placeholder="Title" required />
        <input value={portfolioImageUrl} onChange={(e) => setPortfolioImageUrl(e.target.value)} placeholder="Image URL" required />
        <input value={portfolioDescription} onChange={(e) => setPortfolioDescription(e.target.value)} placeholder="Description" required />
        <button type="submit">Add Portfolio Item</button>
      </form>
    </div>
  );
}