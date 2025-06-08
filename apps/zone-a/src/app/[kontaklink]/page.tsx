

export default function WeblinkPage({params}: {params: {kontaklink: string}}) {
  return (
    <div className="bg-green-300">
        <h1>Weblink page detail {params.kontaklink}</h1>
    </div>
  );
}
