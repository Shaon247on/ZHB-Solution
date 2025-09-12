"use client";
import BlogCard from "@/components/element/BlogCard";
import CreativeStepSection from "@/components/element/CreativeStepSection";
import SubscribeSection from "@/components/element/SubscribeSection";
import { blogs } from "@/data/BlogsDataMain";
import { image } from "framer-motion/client";
import { Dot, Search, FileText } from "lucide-react";
import React, { useState } from "react";

const tags = [
  "All Posts",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solution",
  "Artificial-Intelligence",
  "Digital Marketing",
  "Legacy IT",
];

function BlogsSection() {
  const [activeTag, setActiveTag] = useState("All Posts");
  const [search, setSearch] = useState("");

  const filteredCards = blogs.filter((blog) => {
    const matchesTag =
      activeTag === "All Posts" || blog.tag.includes(activeTag);
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.tag.toLowerCase().includes(search.toLowerCase());

    return matchesTag && matchesSearch;
  });

  // No Results Card Component
  const NoResultsCard = () => (
    <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center py-20">
      <div className="bg-[#EBF1FC] rounded-2xl p-12 text-center max-w-md mx-auto border border-gray-200">
        <div className="mb-6">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        </div>
        <h3 className="text-2xl font-bold text-[#172F5F] mb-4">
          No blogs found
        </h3>
        <p className="text-gray-600 mb-6">
          {search ? (
            <>
              No blogs match your search for "<span className="font-semibold">{search}</span>"
              {activeTag !== "All Posts" && (
                <> in <span className="font-semibold">{activeTag}</span></>
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
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
        >
          View All Posts
        </button>
      </div>
    </div>
  );

  return (
    <section className="px-6 lg:px-[120px] py-10">
      <h2 className="text-center text-[#172F5F] text-4xl font-bold mb-6 mt-6 lg:mt-20">
        Explore the blog
      </h2>

      {/* Filter + Search */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 mb-40 rounded-2xl bg-[#EBF1FC] justify-center py-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 flex-wrap">
          {tags.map((tag, index) => (
            <React.Fragment key={tag}>
              <button
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-[#EBF1FC] text-[#172F5F] hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
              {index < tags.length - 1 && (
                <Dot className="w-4 h-4 text-[#172F5F] pointer-events-none" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-4 py-2 border border-[#172F5F] max-w-[195px] rounded-md text-sm w-64"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.length === 0 ? (
          <NoResultsCard />
        ) : (
          <>
            {filteredCards.map((blog, idx) => {
              // Insert SubscribeSection right after the 6th card
              if (idx === 5 && filteredCards.length >= 7) {
                return (
                  <React.Fragment key={idx}>
                    <BlogCard
                      subtitle={blog.content[0].points[0] || ""}
                      tag={blog.tag}
                      title={blog.title}
                      bgColor="#EBF1FC"
                      image={`/blogs/blog${blog.id}.jpg`}
                      id={blog.id}
                    />
                    <div className="sm:col-span-1 md:col-span-2 lg:col-span-3">
                      <SubscribeSection />
                    </div>
                  </React.Fragment>
                );
              }
              return (
                <BlogCard
                  id={blog.id}
                  key={idx}
                  subtitle={blog.content[0].points[0] || ""}
                  tag={blog.tag}
                  title={blog.title}
                  bgColor="#EBF1FC"
                  image={`/blogs/blog${blog.id}.jpg`}
                />
              );
            })}

            {/* If less than 7 cards → push SubscribeSection to bottom */}
            {filteredCards.length > 0 && filteredCards.length < 7 && (
              <div className="sm:col-span-1 md:col-span-2 lg:col-span-3">
                <SubscribeSection />
              </div>
            )}
          </>
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