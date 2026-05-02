export default function CollectionsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Curated Collections</h1>
      <p className="text-muted-foreground text-lg mb-12">Discover parts grouped by riding style and compatibility.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/20 border border-border/50 rounded-3xl p-8 flex flex-col justify-center min-h-[300px]">
          <h2 className="text-3xl font-bold mb-4">Gravel Grinders</h2>
          <p className="text-muted-foreground mb-6">Everything you need to turn your bike into an off-road adventure machine.</p>
          <button className="self-start px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium">Explore Collection</button>
        </div>
        <div className="bg-muted/20 border border-border/50 rounded-3xl p-8 flex flex-col justify-center min-h-[300px]">
          <h2 className="text-3xl font-bold mb-4">Aero Road</h2>
          <p className="text-muted-foreground mb-6">Cut through the wind with these high-performance, aerodynamic components.</p>
          <button className="self-start px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium">Explore Collection</button>
        </div>
      </div>
    </div>
  );
}
