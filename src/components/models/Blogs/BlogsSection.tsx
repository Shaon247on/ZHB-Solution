"use client";

import React, { useState } from "react";
import { Search, FileText, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import BlogCard from "@/components/element/BlogCard";
import CreativeStepSection from "@/components/element/CreativeStepSection";
import { blogs } from "@/data/BlogsDataMain";
import { Dot } from "lucide-react";

const tags = [
  "All Posts",
  "Artificial-Intelligence",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solution",
  "Digital Marketing",
];

function BlogsSection() {
  const [activeTag, setActiveTag] = useState("All Posts");
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const handleSearchClick = () => {
    setAppliedSearch(search);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const filteredCards = blogs.filter((blog) => {
    const matchesTag =
      activeTag === "All Posts" || blog.tag.includes(activeTag);
    const matchesSearch =
      appliedSearch === "" ||
      blog.title.toLowerCase().includes(appliedSearch.toLowerCase()) ||
      blog.tag.toLowerCase().includes(appliedSearch.toLowerCase());

    return matchesTag && matchesSearch;
  });

  const NoResultsCard = () => (
    <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center py-20">
      <div className="bg-[#EBF1FC] rounded-2xl p-12 text-center max-w-md mx-auto border border-gray-200">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#172F5F] mb-4">
          No blogs found
        </h3>
        <p className="text-gray-600 mb-6">
          {appliedSearch ? (
            <>
              No blogs match your search for "
              <span className="font-semibold">{appliedSearch}</span>"
              {activeTag !== "All Posts" && (
                <>
                  {" "}in <span className="font-semibold">{activeTag}</span>
                </>
              )}
            </>
          ) : (
            <>
              No blogs have been posted yet for{" "}
              <span className="font-semibold">{activeTag}</span>
            </>
          )}
        </p>
        <button
          onClick={() => {
            setActiveTag("All Posts");
            setSearch("");
            setAppliedSearch("");
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition"
        >
          View All Posts
        </button>
      </div>
    </div>
  );

  return (
    <section id="all_blogs" className="px-6 lg:px-[120px] py-10">
      <h2 className="text-center text-[#172F5F] text-4xl font-bold mb-6 mt-6 lg:mt-20">
        Explore the blog
      </h2>

      {/* Filter + Search */}
      <div className="flex items-center flex-col-reverse md:flex-row px-4 lg:items-start gap-6 mb-10 xl:mb-24 rounded-2xl bg-[#EBF1FC] justify-center py-6">
        
        {/* Desktop: Horizontal Tags */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-4 flex-wrap lg:text-xs">
          {tags.map((tag, index) => (
            <React.Fragment key={tag}>
              <button
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTag === tag
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-[#172F5F] hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
              {index < tags.length - 1 && (
                <Dot className="w-5 h-5 text-[#172F5F]" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Dropdown Filter */}
        <div className="lg:hidden w-full max-w-xs mx-auto">
          <Select value={activeTag} onValueChange={setActiveTag}>
            <SelectTrigger className="w-full h-12 bg-white border-gray-300 rounded-xl">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {tags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Box */}
        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
          <button
            onClick={handleSearchClick}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 z-10"
          >
            <Search className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleSearchKeyPress}
            className="w-full pl-12 pr-4 py-3 border border-[#172F5F] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.length === 0 ? (
          <NoResultsCard />
        ) : (
          filteredCards.map((blog, idx) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              subtitle={blog.content[0].points[0] || ""}
              tag={blog.tag}
              title={blog.title}
              bgColor="#EBF1FC"
              image={`/blogs/blog${blog.id}.jpg`}
              releaseDate={blog.releaseDate}
            />
          ))
        )}
      </div>

      <CreativeStepSection
        title="Take the first creative step toward success"
        buttonText="Schedule a call"
      />
    </section>
  );
}

export default BlogsSection;