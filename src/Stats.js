export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start Packing now</p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {numPercentage === 100
        ? "You have packed all items!"
        : `You have ${numItems} of your items, you have packed ${numPacked} (
        ${numPercentage}%) items.`}
    </footer>
  );
}
