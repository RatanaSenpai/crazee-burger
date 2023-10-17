export default function EmptyMenuAdmin({onClick}) {
    return (
        <div>
            <span>Pas de produit</span>
            <button onClick={onClick}>Générer de nouveaux produits</button>
        </div>
    )
}
