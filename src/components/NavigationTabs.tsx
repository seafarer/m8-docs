import { docSections } from '@/data';

interface NavigationTabsProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function NavigationTabs({ activeSection, onSectionChange }: NavigationTabsProps) {
  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex overflow-x-auto scrollbar-none">
        {docSections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionChange(section.id)}
            className={`flex-shrink-0 px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
              activeSection === section.id
                ? 'text-primary border-t-2 border-primary bg-primary/5'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {section.shortTitle || section.title}
          </button>
        ))}
      </div>
    </div>
  );
}