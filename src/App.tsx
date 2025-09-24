import { useState } from 'react';
import { NavigationTabs } from '@/components/NavigationTabs';
import { DocumentationViewer } from '@/components/DocumentationViewer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { docSections } from '@/data';
import "./index.css";

export function App() {
  const [activeSection, setActiveSection] = useState(docSections[0].id);

  const currentSection = docSections.find(section => section.id === activeSection) || docSections[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M8</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Dirtywave M8</h1>
              <p className="text-xs text-muted-foreground">Documentation</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{currentSection.title}</p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pb-16">
        <DocumentationViewer section={currentSection} />
      </main>

      <NavigationTabs 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
    </div>
  );
}

export default App;
