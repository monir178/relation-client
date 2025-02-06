// Filter.tsx
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

const categories = ["All", "Boots", "Loafers", "Sneakers", "Oxford", "Derby"]
const lines = ["Classic", "Modern", "Sport", "Casual", "Formal"]
const filters = ["Size", "Color", "Material", "Price Range"]
const sortOptions = ["NEWEST", "Price High to Low", "Price Low to High", "Popular"]

interface FilterProps {
  onCategoryChange: (category: string) => void;
  onLineChange: (line: string) => void;
  onSortChange: (sort: string) => void;
  selectedSort: string;
}

const Filter: React.FC<FilterProps> = ({
  onCategoryChange,
  onLineChange,
  onSortChange,
  selectedSort,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const FilterSection = ({ title, items, onItemClick }: { 
    title: string; 
    items: string[]; 
    onItemClick?: (item: string) => void; 
  }) => (
    <div className="py-4">
      <h3 className="text-sm font-medium mb-3 px-4">{title}</h3>
      <div className="space-y-1">
        {items.map((item) => (
          <Button
            key={item}
            variant="ghost"
            className="w-full justify-start text-sm h-auto py-2 px-4 font-normal hover:bg-gray-100"
            onClick={() => {
              onItemClick?.(item);
              setIsOpen(false);
            }}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );

  const MobileFilters = () => (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="space-y-2 divide-y divide-gray-100">
        <FilterSection 
          title="CATEGORY" 
          items={categories} 
          onItemClick={onCategoryChange} 
        />
        <FilterSection 
          title="LINE" 
          items={lines} 
          onItemClick={onLineChange} 
        />
        <FilterSection 
          title="FILTERS" 
          items={filters} 
        />
        <FilterSection 
          title="SORT BY" 
          items={sortOptions} 
          onItemClick={onSortChange} 
        />
      </div>
    </ScrollArea>
  );

  return (
    <nav className="border-b border-gray-200  bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-16">
          {/* Breadcrumb - Always visible but responsive */}
          <div className="flex items-center space-x-2 sm:space-x-6 py-4">
            <a href="/women" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
              Women
            </a>
            <span className="text-gray-300">/</span>
            <a href="/women/shoes" className="text-xs sm:text-sm text-gray-900 whitespace-nowrap">
              Shoes for Women
            </a>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">CATEGORY</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className="text-sm"
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">LINE</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {lines.map((line) => (
                  <DropdownMenuItem 
                    key={line}
                    onClick={() => onLineChange(line)}
                    className="text-sm"
                  >
                    {line}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">FILTERS</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {filters.map((filter) => (
                  <DropdownMenuItem 
                    key={filter}
                    className="text-sm"
                  >
                    {filter}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <span className="text-sm text-gray-900">{selectedSort}</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {sortOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option}
                    onClick={() => onSortChange(option)}
                    className="text-sm"
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-auto py-2"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:max-w-md p-0"
              >
                <SheetHeader className="px-4 py-4 border-b">
                  <SheetTitle>Filters & Sort</SheetTitle>
                </SheetHeader>
                <MobileFilters />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Filter;