"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Blog } from "@/data/BlogsDataMain";

// Zod schemas
const commentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(10, "Comment must be at least 10 characters long"),
});

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type CommentFormData = z.infer<typeof commentSchema>;
type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface BlogPageProps {
  id: number;
  blogs: Blog[];
}

const BlogPage: React.FC<BlogPageProps> = ({ id, blogs }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  console.log("Blog id", id);
  console.log("Blogs data", blogs);
  // Find the blog by ID
  const idNumber = Number(id);
  const blog = blogs.find((b) => b.id === idNumber);
  console.log("blog a details:", blog); // I'm getting undefined here
  // Comment form
  const commentForm = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  // Newsletter form
  const newsletterForm = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onCommentSubmit = () => {
    commentForm.handleSubmit((data: CommentFormData) => {
      console.log("Comment submitted:", data);
      // Handle comment submission
      commentForm.reset();
    })();
  };

  const onNewsletterSubmit = () => {
    newsletterForm.handleSubmit((data: NewsletterFormData) => {
      console.log("Newsletter subscription:", data);
      // Handle newsletter subscription
      newsletterForm.reset();
    })();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle case where blog is not found
  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600">
            The requested blog post could not be found.
          </p>
          <Link href="/blogs">
            <Button className="mt-4">Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Helper function to render section content
  const renderSectionContent = (sectionKey: string) => {
    const section = blog.sections[sectionKey];
    if (!section) return null;

    return (
      <Card id={section.id} className="mb-8 bg-[#F9F8F4] border-none shadow-lg">
        <CardContent className="lg:mx-6 lg:my-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>

          {/* Render subtitle */}
          {section.subtitle && (
            <div className="mb-4">
              {Array.isArray(section.subtitle) ? (
                <ul className="space-y-3">
                  {section.subtitle.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {section.subtitle}
                </p>
              )}
            </div>
          )}

          {/* Render cards if they exist */}
          {section.cards && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {section.cards.map((card, index) => (
                <Card key={index} className="bg-[#FDFDFD] border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {section.cards!.length > 3
                        ? `${index + 1}) ${card.title}`
                        : card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{card.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 sm:px-6 lg:px-28 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 max-w-[828px]"
          >
            <div className="mb-4">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 mb-4"
              >
                {blog.tags[0] || "General"}
              </Badge>
            </div>

            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold max-w-[828px] font-orbitron text-gray-900 mb-6">
              {blog.title}
            </h1>

            <p className="text-[#464646] font-medium mb-6">
              A comprehensive guide exploring the latest developments and
              insights.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {blog.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm text-gray-600">{blog.author}</span>
              </div>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-600">{blog.publishDate}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-600">{blog.readTime}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[360px] md:w-[804px] h-auto md:min-h-[528px] md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden"
          >
            <Image
              src={`/blogs/blog${blog.id}.jpg`}
              alt={blog.title}
              width={804}
              height={528}
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <div
            className={`lg:col-span-1 order-1 items-center ${
              isMobile ? "" : isSticky ? "lg:sticky lg:top-8 lg:self-start" : ""
            }`}
          >
            <div className="space-y-6">
              {/* On This Page */}
              <Card className="bg-[#F9F8F4] border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    On this page
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {blog.sidebar.map((sidebarItem, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(sidebarItem.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
                      >
                        {sidebarItem.item}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="bg-[#F9F8F4] border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card className="bg-[#F9F8F4] border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Related Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blog.relatedPosts.map((post, index) => (
                      <div key={index}>
                        <Link href={post.link}>
                          <h4 className="font-medium text-gray-900 text-sm mb-1 hover:text-blue-600 cursor-pointer">
                            {post.title}
                          </h4>
                        </Link>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Render dynamic sections */}
              {Object.keys(blog.sections).map((sectionKey) => (
                <div key={sectionKey}>{renderSectionContent(sectionKey)}</div>
              ))}

              {/* Call to Action */}
              <Card className="mb-8 border-none shadow-none">
                <CardContent className="lg:mx-6 lg:my-2 border-2 border-[#959595] p-6 rounded-2xl">
                  <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Need help with your project?
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        Our team designs, builds, and operates solutions for
                        global audiences.
                      </p>
                    </div>
                    <div>
                      <Link href="/contact">
                        <Button>Contact Us</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comment Section */}
              <div className="w-full p-4 space-y-6">
                <Card className="w-full" style={{ backgroundColor: "#F9F8F4" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      Leave a comment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            {...commentForm.register("name")}
                            className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your name"
                          />
                          {commentForm.formState.errors.name && (
                            <p className="text-sm text-red-600">
                              {commentForm.formState.errors.name.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...commentForm.register("email")}
                            className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="your.email@example.com"
                          />
                          {commentForm.formState.errors.email && (
                            <p className="text-sm text-red-600">
                              {commentForm.formState.errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="comment"
                          className="text-sm font-medium text-gray-700"
                        >
                          Comment
                        </Label>
                        <Textarea
                          id="comment"
                          {...commentForm.register("comment")}
                          className="w-full min-h-[120px] bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-y"
                          placeholder="Share your thoughts..."
                        />
                        {commentForm.formState.errors.comment && (
                          <p className="text-sm text-red-600">
                            {commentForm.formState.errors.comment.message}
                          </p>
                        )}
                      </div>

                      <Button
                        onClick={onCommentSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
                        disabled={commentForm.formState.isSubmitting}
                      >
                        {commentForm.formState.isSubmitting
                          ? "Sending..."
                          : "Send"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Subscription */}
                <Card className="w-full bg-white">
                  <CardContent>
                    <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
                      <div className="flex-1 space-y-2">
                        <Label
                          htmlFor="newsletter-email"
                          className="text-2xl font-semibold text-gray-800"
                        >
                          Get the latest posts in your inbox
                        </Label>
                        <p className="text-sm text-gray-600 mb-2">
                          No spam, unsubscribe anytime
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <Input
                          id="newsletter-email"
                          type="email"
                          {...newsletterForm.register("email")}
                          className="lg:w-[575px] h-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                          placeholder="your.email@example.com"
                        />
                        {newsletterForm.formState.errors.email && (
                          <p className="text-sm text-red-600">
                            {newsletterForm.formState.errors.email.message}
                          </p>
                        )}
                        <Button
                          onClick={onNewsletterSubmit}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-full py-2 font-medium transition-colors duration-200 whitespace-nowrap"
                          disabled={newsletterForm.formState.isSubmitting}
                        >
                          {newsletterForm.formState.isSubmitting
                            ? "Subscribing..."
                            : "Subscribe"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
