// High-Margin Business Ideas Directory Database
const BUSINESS_IDEAS = [
    {
        id: "ai-agency",
        name: "AI Automation & Integration Agency",
        tagline: "Build custom workflow logic and custom chatbots for local B2B businesses.",
        industry: "tech",
        capital: "low",
        difficulty: "medium",
        margin: 85,
        launchSpeed: "10 Days",
        potential: "$12,500/mo",
        concept: "B2B companies are desperate to integrate AI to reduce customer service loads and administrative hours. You design custom Make.com automations, ChatGPT-based lead intake bots, and internal database pipelines, charging premium setup fees and recurring maintenance retainers.",
        stack: ["Make.com (Integromat)", "Airtable", "OpenAI Assistant API", "v0.dev", "Voiceflow / Botpress"],
        steps: [
            { num: 1, title: "Learn Make.com & Botpress basics", desc: "Spend 3 days mastering webhook triggers, data routing, and API queries." },
            { num: 2, title: "Build a solid intake demonstration bot", desc: "Build a highly responsive chatbot on your own landing page for visual proof." },
            { num: 3, title: "Audit local services bottleneck", desc: "Call local law firms, dental clinics, or realtors. Identify manual intake leaks." },
            { num: 4, title: "Offer a free 'Audit & Custom Workflow Map'", desc: "Deliver a visual diagram showing them how they can save 15 hours a week." },
            { num: 5, title: "Sell $2,000 setups & $300/mo retainers", desc: "Implement the pipeline, train their staff, and charge recurring fees to monitor API uptimes." }
        ],
        monetization: [
            "Upfront System Setup Fee ($1,500 - $4,000)",
            "Monthly Maintenance & Optimization Retainer ($250 - $600/mo)",
            "API and SaaS Tool Markup commission"
        ],
        matchSkills: ["tech", "operations"]
    },
    {
        id: "micro-saas",
        name: "Micro-SaaS Software Platform",
        tagline: "Launch a single-feature lightweight tool solving a specific pain point.",
        industry: "tech",
        capital: "mid",
        difficulty: "hard",
        margin: 90,
        launchSpeed: "21 Days",
        potential: "$8,500/mo",
        concept: "Instead of building a massive software suite, build a micro-SaaS: a hyper-focused tool that does exactly one thing extremely well (e.g., automated invoice formatters for freelance writers, or cold email copy cleaners). Low overhead, high recurring revenue.",
        stack: ["HTML/JS (Frontend)", "NodeJS / Firebase (Backend)", "Stripe (Payments)", "Cursor IDE", "GitHub"],
        steps: [
            { num: 1, title: "Identify high-pain, low-complexity gaps", desc: "Browse Chrome Web Store, Shopify App Store, and Reddit for common complaints." },
            { num: 2, title: "Develop the absolute MVP core", desc: "Create a simple, single-page application addressing that exact complaint." },
            { num: 3, title: "Integrate Stripe billing systems", desc: "Set up a clean $9/mo to $29/mo tiered subscription tier." },
            { num: 4, title: "Launch on ProductHunt & directories", desc: "Post to IndieHackers, HackerNews, BetaList, and niche Reddit subreddits." },
            { num: 5, title: "Iterate on immediate user feedback", desc: "Listen carefully to early adopters, squash bugs, and keep churn below 5%." }
        ],
        monetization: [
            "Monthly Subscription SaaS Tier ($9 - $49/mo)",
            "Annual Discounted Pass plans ($79 - $299/yr)",
            "Usage-based add-on credit bundles"
        ],
        matchSkills: ["tech"]
    },
    {
        id: "niche-agency",
        name: "Specialized Outreach & Lead Gen Agency",
        tagline: "Build qualified B2B appointment pipelines for growing tech startups.",
        industry: "service",
        capital: "low",
        difficulty: "easy",
        margin: 80,
        launchSpeed: "7 Days",
        potential: "$15,000/mo",
        concept: "Startups have great products but lack time for outbound prospecting. You take over their sales funnel: compile targeted lead lists, draft personalized copy, set up automated campaigns, and deliver booked discovery calls directly onto their sales calendars.",
        stack: ["Instantly.ai (Cold Email)", "Smartlead", "Apollo.io (Leads)", "Google Workspace", "LinkedIn Sales Navigator"],
        steps: [
            { num: 1, title: "Set up secondary outreach domains", desc: "Buy 3 domains and set up Google Workspaces with proper SPF/DKIM records." },
            { num: 2, title: "Define a high-value client target", desc: "Focus strictly on SaaS founders, digital design agencies, or logistics hubs." },
            { num: 3, title: "Scrape 500 targeted lead contacts", desc: "Use Apollo.io or Sales Navigator to find decision-makers (VP of Sales, CEO)." },
            { num: 4, title: "Write a high-leverage cold email template", desc: "Offer 3 qualified opportunities or offer a full 100% money-back guarantee." },
            { num: 5, title: "Charge per booked sales meeting", desc: "Charge a $1,000 retainer + $250 commission for every qualified call that shows up." }
        ],
        monetization: [
            "Base Monthly Operations Fee ($1,500 - $3,000/mo)",
            "Performance Booked-Meeting Bonuses ($150 - $300 per call)",
            "High-ticket backend closing commissions (percentage of deal closed)"
        ],
        matchSkills: ["sales", "creative"]
    },
    {
        id: "digital-assets",
        name: "Premium Digital Product & Templates Hub",
        tagline: "Package your specialized skills into curated templates and frameworks.",
        industry: "content",
        capital: "low",
        difficulty: "easy",
        margin: 95,
        launchSpeed: "14 Days",
        potential: "$5,000/mo",
        concept: "Create premium assets that users can buy and download instantly. Examples include high-end Notion templates, professional Figma UI kits, pre-built Webflow components, or automated spreadsheets. Zero manufacturing cost, infinite copies sold.",
        stack: ["Notion or Figma (Builders)", "Gumroad / Lemon Squeezy", "Loom (Tutorials)", "Pinterest & X/Twitter"],
        steps: [
            { num: 1, title: "Audit what you build in daily tasks", desc: "Package spreadsheets, trackers, or design formats you use regularly." },
            { num: 2, title: "Polish to premium consumer levels", desc: "Add detailed manuals, configuration setup videos, and clean visual themes." },
            { num: 3, title: "Set up a checkout store profile", desc: "Configure Lemon Squeezy or Gumroad with rich product screenshots." },
            { num: 4, title: "Deploy organic content tutorials", desc: "Post step-by-step videos on YouTube, TikTok, and X showing the template in action." },
            { num: 5, title: "Build an active email subscriber list", desc: "Offer a free mini-asset to collect emails, then upsell them your premium bundle." }
        ],
        monetization: [
            "One-time digital asset downloads ($19 - $149)",
            "Premium Bundle Kits ($199 - $399)",
            "Premium ongoing community upgrades"
        ],
        matchSkills: ["creative", "operations"]
    },
    {
        id: "paid-newsletter",
        name: "Paid Newsletter & Curated Community Hub",
        tagline: "Synthesize rare industry insights into premium newsletters & forums.",
        industry: "content",
        capital: "low",
        difficulty: "medium",
        margin: 85,
        launchSpeed: "14 Days",
        potential: "$7,000/mo",
        concept: "The internet is overloaded with noise. Busy executives and professionals gladly pay a subscription to receive high-value syntheses, micro-case studies, and a private forum of vetted peers solving the exact same business problems.",
        stack: ["Substack / Beehiiv (Publishing)", "Skool / Circle (Community)", "Stripe", "Canva (Graphics)"],
        steps: [
            { num: 1, title: "Choose a highly profitable vertical", desc: "Pick niches with high purchasing power: e.g. AI tools, real estate, B2B sales." },
            { num: 2, title: "Publish 5 highly researched free essays", desc: "Set a high bar. Provide actual data, teardowns, and actionable insights." },
            { num: 3, title: "Promote on niche content clusters", desc: "Post quotes and slides on LinkedIn, Twitter, and professional directories." },
            { num: 4, title: "Introduce a Premium Subscriber tier", desc: "Charge $15/mo for access to complete deep-dives, directories, and data charts." },
            { num: 5, title: "Embed a paid community forum layer", desc: "Upsell your active readers to a $49/mo mastermind group to discuss ideas in real-time." }
        ],
        monetization: [
            "Monthly Subscription Tier ($10 - $49/mo)",
            "Paid Newsletter Sponsorship ads ($200 - $1,000 per slot)",
            "Premium ticketed virtual mastermind events"
        ],
        matchSkills: ["creative", "sales"]
    },
    {
        id: "sharing-platform",
        name: "Niche Resource Sharing / Rental Portal",
        tagline: "Rent out highly specialized, expensive digital or physical gear.",
        industry: "service",
        capital: "mid",
        difficulty: "medium",
        margin: 75,
        launchSpeed: "14 Days",
        potential: "$9,000/mo",
        concept: "Identify expensive equipment or high-priced licenses that small teams need occasionally but don't want to buy outright (e.g., high-end 3D laser scanners, premium video production rigs, or shared access to specialized enterprise APIs). You own the asset, rent it out recurringly.",
        stack: ["Webflow (CMS)", "ShareTribe / Bubble (Rental portal)", "Outseta (Users)", "Stripe Billing"],
        steps: [
            { num: 1, title: "Research local equipment bottleneck", desc: "Ask indie filmmakers, surveyors, or developers what licenses/equipment are too expensive." },
            { num: 2, title: "Source the physical or digital asset", desc: "Buy high-quality, in-demand gear used, or secure programmatic enterprise keys." },
            { num: 3, title: "Construct a clean booking inventory page", desc: "Build a visual calendar showing clear dates and rental rules." },
            { num: 4, title: "Deploy hyper-local target SEO and ads", desc: "Optimize for search keywords: e.g. 'Rent RED Camera [My City]'. " },
            { num: 5, title: "Automate check-out and contract logic", desc: "Integrate automatic security deposits, insurance agreements, and pickup lockers." }
        ],
        monetization: [
            "Daily/Weekly Rental Rates ($100 - $500/day)",
            "Security Deposit Hold systems",
            "Convenient logistics or delivery upcharges"
        ],
        matchSkills: ["operations", "sales"]
    },
    {
        id: "white-label",
        name: "White-Label Software Reseller System",
        tagline: "Rebrand high-value utility SaaS products and sell to local markets.",
        industry: "tech",
        capital: "mid",
        difficulty: "medium",
        margin: 80,
        launchSpeed: "7 Days",
        potential: "$11,000/mo",
        concept: "You don't need to write code to own a SaaS. Many enterprise CRM platforms (like GoHighLevel) allow you to completely white-label their multi-million dollar software, slap your logo on it, and resell it to local businesses (gyms, plumbers, HVAC) for a monthly fee.",
        stack: ["GoHighLevel / Vendasta (White label)", "Stripe", "Your custom logo", "Loom training videos"],
        steps: [
            { num: 1, title: "Acquire a reseller parent subscription", desc: "Sign up for a white-label partner account that permits unlimited accounts." },
            { num: 2, title: "Configure custom domains & portals", desc: "Set up the app portal on your own domain (e.g. app.myhustlesoftware.com)." },
            { num: 3, title: "Pre-configure 3 niche industry templates", desc: "Create complete SMS campaigns, appointment calendars, and reviews trackers." },
            { num: 4, title: "Pitch local service shops face-to-face", desc: "Show them how your CRM captures lost leads from missed phone calls." },
            { num: 5, title: "Charge recurring SaaS prices", desc: "Collect $197/mo or $297/mo subscriptions. Set up automated Stripe billing cycles." }
        ],
        monetization: [
            "Monthly Software Tier ($97 - $297/mo per client)",
            "Setup & Onboarding Fees ($499 one-time)",
            "Custom automated workflow custom integrations ($1,000+)"
        ],
        matchSkills: ["sales", "operations"]
    },
    {
        id: "fractional-consulting",
        name: "Fractional Expert / Sales Consultant",
        tagline: "Provide high-ticket strategic leadership on a part-time basis.",
        industry: "service",
        capital: "low",
        difficulty: "hard",
        margin: 95,
        launchSpeed: "5 Days",
        potential: "$16,500/mo",
        concept: "Growing businesses need elite managers (e.g. CMO, VP of Sales, Head of Operations) but cannot afford a full-time executive salary of $200K+. You step in as a fractional executive, managing their team for 5-10 hours a week for a premium monthly retainer.",
        stack: ["Google Meet / Zoom", "Slack", "LinkedIn Premium", "Calendly"],
        steps: [
            { num: 1, title: "Deconstruct your corporate expertise", desc: "List exact metrics you've hit before: e.g. grew sales by 40%, cut overhead by 15%." },
            { num: 2, title: "Optimize your personal brand profiles", desc: "Rewrite LinkedIn header to emphasize outcomes: 'Fractional head of operations for Series A'." },
            { num: 3, title: "Identify companies that recently raised funding", desc: "Find businesses with 10-50 employees who need rapid structuring but lack massive budgets." },
            { num: 4, title: "Pitch a part-time strategic execution plan", desc: "Offer to lead their department, structure the weekly syncs, and coach their juniors." },
            { num: 5, title: "Charge high-ticket monthly retainers", desc: "Close 3 corporate clients at $3,500/mo to $5,000/mo each for highly scalable work." }
        ],
        monetization: [
            "Monthly Advisory Retainers ($3,000 - $6,000/mo)",
            "Performance growth equity or milestone fees",
            "Deep-dive intensive setup weekend consults ($5,000)"
        ],
        matchSkills: ["sales", "operations"]
    }
];

// App State Management
const STATE = {
    favorites: JSON.parse(localStorage.getItem("vf_favorites")) || [],
    checklist: JSON.parse(localStorage.getItem("vf_checklist")) || [false, false, false, false, false],
    quizAnswers: { capital: null, skill: null, hours: null },
    quizStep: 0,
    activeMatchmaking: false
};

// SVG Chart Metrics (State Cache)
let cachedRevenue = 12000;
let cachedCost = 2150;
let cachedNet = 9850;

// Initialize Elements
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initChecklist();
    initCalculator();
    initQuiz();
    renderCards();
    setupFilters();
    initPdfExports();
});

// Navigation Highlight
function initNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
}

// Generate Standard Inline Icons
function getIconSvg(id, isAccent = false) {
    // Return custom inline SVGs matching the category
    switch (id) {
        case "ai-agency":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M12 8v8M8 12h8M4 9h16M4 15h16"></path></svg>`;
        case "micro-saas":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`;
        case "niche-agency":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
        case "digital-assets":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`;
        case "paid-newsletter":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
        case "sharing-platform":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="4"></line><line x1="8" y1="2" x2="8" y2="4"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
        case "white-label":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`;
        case "fractional-consulting":
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`;
        default:
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon></svg>`;
    }
}

// Render the Database Cards Grid
function renderCards(ideasToRender = BUSINESS_IDEAS) {
    const grid = document.getElementById("ideas-grid-container");
    grid.innerHTML = "";

    if (ideasToRender.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
                <p style="font-size: 1.25rem;">No matching business formulas found.</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try adjusting your filters or search term.</p>
            </div>
        `;
        return;
    }

    ideasToRender.forEach((idea, idx) => {
        const isFav = STATE.favorites.includes(idea.id);
        const cardClass = idx % 2 === 0 ? "idea-card glass-panel" : "idea-card glass-panel accent-card";
        const matches = idea.matchScore ? `style="display: inline-block;"` : "";
        const glow = (STATE.activeMatchmaking && idx === 0) ? `style="box-shadow: 0 0 30px rgba(6, 182, 212, 0.4); border-color: var(--accent);"` : "";

        const card = document.createElement("div");
        card.className = cardClass;
        card.id = `card-${idea.id}`;
        if (glow) card.setAttribute("style", "box-shadow: 0 0 30px rgba(6, 182, 212, 0.4); border-color: var(--accent);");

        card.innerHTML = `
            <div>
                <div class="idea-card-header">
                    <div class="idea-card-icon">
                        ${getIconSvg(idea.id)}
                    </div>
                    <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${idea.id}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </button>
                </div>

                <h3>${idea.name}</h3>
                <p class="idea-description">${idea.tagline}</p>

                <div class="idea-tags">
                    <span class="tag tag-industry">${idea.industry.toUpperCase()}</span>
                    <span class="tag tag-margin">${idea.margin}% Margin</span>
                    <span class="tag tag-capital">${idea.capital === 'low' ? '<$500 Cap' : '$500-$2.5K Cap'}</span>
                </div>

                <div class="idea-stats-row">
                    <div class="idea-stat-box">
                        <span class="idea-stat-lbl">MRR Potential</span>
                        <span class="idea-stat-val" style="color: var(--success);">${idea.potential}</span>
                    </div>
                    <div class="idea-stat-box">
                        <span class="idea-stat-lbl">Launch Speed</span>
                        <span class="idea-stat-val">${idea.launchSpeed}</span>
                    </div>
                </div>
            </div>

            <div class="idea-card-footer">
                <button class="btn btn-primary btn-sm" onclick="openBlueprint('${idea.id}')">Blueprint</button>
                <span class="match-score-badge" ${matches}>${idea.matchScore}% Match</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search and Filter logic
function setupFilters() {
    const search = document.getElementById("search-bar");
    const industry = document.getElementById("filter-industry");
    const capital = document.getElementById("filter-capital");
    const difficulty = document.getElementById("filter-difficulty");

    const runFilters = () => {
        const query = search.value.toLowerCase().trim();
        const indVal = industry.value;
        const capVal = capital.value;
        const diffVal = difficulty.value;

        const filtered = BUSINESS_IDEAS.filter(idea => {
            const matchesSearch = idea.name.toLowerCase().includes(query) ||
                                  idea.tagline.toLowerCase().includes(query) ||
                                  idea.concept.toLowerCase().includes(query) ||
                                  idea.stack.some(tool => tool.toLowerCase().includes(query));

            const matchesInd = indVal === "all" || idea.industry === indVal;
            const matchesCap = capVal === "all" || idea.capital === capVal;
            const matchesDiff = diffVal === "all" || idea.difficulty === diffVal;

            return matchesSearch && matchesInd && matchesCap && matchesDiff;
        });

        // If active matchmaking sorting was triggered, preserve sort order of matches
        if (STATE.activeMatchmaking) {
            filtered.sort((a, b) => b.matchScore - a.matchScore);
        }

        renderCards(filtered);
    };

    search.addEventListener("input", runFilters);
    industry.addEventListener("change", runFilters);
    capital.addEventListener("change", runFilters);
    difficulty.addEventListener("change", runFilters);
}

// Toggle Favorite Bookmarks
window.toggleFavorite = function(id) {
    const idx = STATE.favorites.indexOf(id);
    if (idx === -1) {
        STATE.favorites.push(id);
    } else {
        STATE.favorites.splice(idx, 1);
    }
    localStorage.setItem("vf_favorites", JSON.stringify(STATE.favorites));
    
    // Rerender active filters
    const search = document.getElementById("search-bar");
    search.dispatchEvent(new Event("input"));
};

// Modal Detail Popup Action
window.openBlueprint = function(id) {
    const idea = BUSINESS_IDEAS.find(i => i.id === id);
    if (!idea) return;

    const overlay = document.getElementById("blueprint-modal");
    
    // Header
    document.getElementById("m-title").innerText = idea.name;
    document.getElementById("m-icon-box").innerHTML = getIconSvg(idea.id, true);
    document.getElementById("m-margin").innerText = `${idea.margin}% Net Profit Margin`;
    document.getElementById("m-capital").innerText = idea.capital === 'low' ? 'Startup Capital: <$500' : 'Startup Capital: $500 - $2,500';

    // Body Panels
    document.getElementById("m-concept").innerText = idea.concept;
    document.getElementById("m-income").innerText = idea.potential;
    document.getElementById("m-difficulty").innerText = idea.difficulty.toUpperCase();

    // Stack tags
    const stackWrap = document.getElementById("m-stack-list");
    stackWrap.innerHTML = "";
    idea.stack.forEach(tool => {
        const span = document.createElement("span");
        span.className = "stack-tag";
        span.innerText = tool;
        stackWrap.appendChild(span);
    });

    // Steps list
    const stepsWrap = document.getElementById("m-steps-list");
    stepsWrap.innerHTML = "";
    idea.steps.forEach(step => {
        const stepDiv = document.createElement("div");
        stepDiv.className = "b-step";
        stepDiv.innerHTML = `
            <div class="b-step-num">${step.num}</div>
            <div class="b-step-content"><strong>${step.title}:</strong> ${step.desc}</div>
        `;
        stepsWrap.appendChild(stepDiv);
    });

    // Monetization list
    const monWrap = document.getElementById("m-monetization");
    monWrap.innerHTML = "";
    idea.monetization.forEach(model => {
        const li = document.createElement("li");
        li.className = "side-list-item";
        li.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: var(--success);"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${model}</span>
        `;
        monWrap.appendChild(li);
    });

    overlay.classList.add("active");
};

// Wire Close Modal
document.getElementById("modal-close-btn").addEventListener("click", () => {
    document.getElementById("blueprint-modal").classList.remove("active");
});
document.getElementById("blueprint-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("blueprint-modal")) {
        document.getElementById("blueprint-modal").classList.remove("active");
    }
});

// Matchmaker Quiz Logic
function initQuiz() {
    const stepsWrapper = document.getElementById("quiz-steps-wrapper");
    const progressFill = document.getElementById("quiz-progress");
    const backBtn = document.getElementById("quiz-back-btn");
    const nextBtn = document.getElementById("quiz-next-btn");
    const options = document.querySelectorAll(".quiz-option");

    // Click selector
    options.forEach(opt => {
        opt.addEventListener("click", () => {
            const stepGroup = opt.closest(".quiz-step");
            const stepNum = parseInt(stepGroup.dataset.step);
            const metric = opt.dataset.metric;
            const val = opt.dataset.val;

            // Clear previously selected in step
            stepGroup.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");

            STATE.quizAnswers[metric] = val;
            nextBtn.disabled = false;
        });
    });

    const updateStepUI = () => {
        // Move container width offsets
        stepsWrapper.style.transform = `translateX(-${STATE.quizStep * 33.333}%)`;
        progressFill.style.width = `${((STATE.quizStep + 1) / 3) * 100}%`;

        // Update back button
        backBtn.disabled = STATE.quizStep === 0;

        // Update next button
        const activeStepEl = document.querySelector(`.quiz-step[data-step="${STATE.quizStep}"]`);
        const chosen = activeStepEl.querySelector(".quiz-option.selected");
        nextBtn.disabled = !chosen;

        if (STATE.quizStep === 2) {
            nextBtn.innerText = "Match Me Now";
            nextBtn.className = "btn btn-accent";
        } else {
            nextBtn.innerText = "Next Step";
            nextBtn.className = "btn btn-primary";
        }
    };

    backBtn.addEventListener("click", () => {
        if (STATE.quizStep > 0) {
            STATE.quizStep--;
            updateStepUI();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (STATE.quizStep < 2) {
            STATE.quizStep++;
            updateStepUI();
        } else {
            calculateQuizMatches();
        }
    });
}

// Calculate compatibility matching algorithm
function calculateQuizMatches() {
    STATE.activeMatchmaking = true;
    const ans = STATE.quizAnswers;

    BUSINESS_IDEAS.forEach(idea => {
        let score = 50; // base score

        // 1. Budget assessment
        if (ans.capital === "low") {
            if (idea.capital === "low") score += 25;
            else score -= 15;
        } else if (ans.capital === "mid") {
            if (idea.capital === "mid") score += 25;
            else score += 15; // low capital is completely fine for higher budget
        }

        // 2. Strengths alignment
        if (idea.matchSkills.includes(ans.skill)) {
            score += 25;
        } else {
            // adjacent check
            score += 5;
        }

        // 3. Time dedication
        if (ans.hours === "part") {
            // Service agencies and fractional work can be fit into side hustle easily
            if (idea.difficulty === "easy" || idea.id === "digital-assets" || idea.id === "paid-newsletter") {
                score += 25;
            } else {
                score += 10;
            }
        } else if (ans.hours === "full") {
            score += 25; // All options are viable with full focus
        }

        idea.matchScore = Math.min(score, 100);
    });

    // Sort database by highest matching score descending
    BUSINESS_IDEAS.sort((a, b) => b.matchScore - a.matchScore);

    // Re-render and scroll
    renderCards(BUSINESS_IDEAS);
    
    // Jump scroll to Ideas Container
    const ideasSection = document.getElementById("ideas");
    ideasSection.scrollIntoView({ behavior: "smooth" });

    // Show matching labels on navigation banner
    const explorerLink = document.getElementById("lnk-ideas");
    explorerLink.innerHTML = "Matched Formulas ✨";
    explorerLink.style.color = "var(--accent)";
}

// Financial Reactive Simulator Logic
function initCalculator() {
    const inputPrice = document.getElementById("input-price");
    const inputVolume = document.getElementById("input-volume");
    const inputCac = document.getElementById("input-cac");
    const inputOverhead = document.getElementById("input-overhead");

    const valPrice = document.getElementById("val-price");
    const valVolume = document.getElementById("val-volume");
    const valCac = document.getElementById("val-cac");
    const valOverhead = document.getElementById("val-overhead");

    const metricGross = document.getElementById("metric-gross");
    const metricMarketing = document.getElementById("metric-marketing");
    const metricNet = document.getElementById("metric-net");
    const metricMargin = document.getElementById("metric-margin");
    const metricBreakeven = document.getElementById("metric-breakeven");

    const recompute = () => {
        const price = parseInt(inputPrice.value);
        const volume = parseInt(inputVolume.value);
        const cac = parseInt(inputCac.value);
        const overhead = parseInt(inputOverhead.value);

        // Update labels
        valPrice.innerText = `$${price.toLocaleString()}`;
        valVolume.innerText = volume;
        valCac.innerText = `$${cac.toLocaleString()}`;
        valOverhead.innerText = `$${overhead.toLocaleString()}`;

        // Compute numbers
        const gross = price * volume;
        const marketing = cac * volume;
        const totalCost = marketing + overhead;
        const net = gross - totalCost;
        
        let margin = 0;
        if (gross > 0) {
            margin = Math.round((net / gross) * 100);
        }

        // Breakeven clients metric: Overhead / (Price - CAC)
        let breakeven = 0;
        if (price > cac) {
            breakeven = overhead / (price - cac);
        }

        // Render DOM results
        metricGross.innerText = `$${gross.toLocaleString()}`;
        metricMarketing.innerText = `$${marketing.toLocaleString()}`;
        metricNet.innerText = (net < 0 ? "-" : "") + `$${Math.abs(net).toLocaleString()}`;
        metricMargin.innerText = `${margin}%`;
        metricBreakeven.innerText = breakeven.toFixed(1);

        // Styling for negative profit
        if (net < 0) {
            metricNet.style.color = "var(--danger)";
            metricNet.style.webkitTextFillColor = "var(--danger)";
        } else {
            metricNet.style.color = "var(--accent)";
            metricNet.style.webkitTextFillColor = "var(--accent)";
        }

        // Keep local cache
        cachedRevenue = gross;
        cachedCost = totalCost;
        cachedNet = net;

        // Render dynamic SVG graph
        redrawSvgGraph(volume, gross, totalCost, net, breakeven);
    };

    // Listen to changes
    const inputs = [inputPrice, inputVolume, inputCac, inputOverhead];
    inputs.forEach(input => {
        input.addEventListener("input", recompute);
    });

    // Run first calculation
    recompute();
}

// Redraw SVG graph curves
function redrawSvgGraph(volume, gross, cost, net, breakeven) {
    const barCost = document.getElementById("chart-cost-bar-1");
    const barRev = document.getElementById("chart-revenue-bar-1");
    const chartPath = document.getElementById("chart-path");
    const targetIndicator = document.getElementById("chart-breakeven-indicator");

    // Math conversions to screen coordinates (Canvas box is 360 x 150)
    // Height limits: Y coordinates 15 (max revenue height) to 120 (axis bottom)
    const axisY = 120;
    const maxVal = Math.max(gross, cost, 1000); // Prevent divide by zero

    // Scale heights
    const costHeight = (cost / maxVal) * 90;
    const revHeight = (gross / maxVal) * 90;

    // Apply values to SVG element bars
    barCost.setAttribute("y", (axisY - costHeight).toString());
    barCost.setAttribute("height", costHeight.toString());

    barRev.setAttribute("y", (axisY - revHeight).toString());
    barRev.setAttribute("height", revHeight.toString());

    // Generate dynamic cubic Bezier path representing scale of profit growth
    // Y points: if net profit is negative, curve drops below the axisY line.
    const startY = 120 - ((gross - cost) / maxVal) * 20; // baseline
    const midY = 120 - ((gross - cost) / maxVal) * 45;
    const endY = Math.max(15, 120 - ((gross - cost) / maxVal) * 95);

    chartPath.setAttribute("d", `M 40 ${startY} Q 190 ${midY} 340 ${endY}`);

    // Update indicator dot placement
    // Position of indicator tracks along the curve depending on breakeven value
    const indicatorX = Math.min(320, 40 + (breakeven * 22));
    const indicatorY = Math.max(25, 120 - (breakeven * 8));
    targetIndicator.setAttribute("cx", indicatorX.toString());
    targetIndicator.setAttribute("cy", indicatorY.toString());
}

// Interactive startup launch checklists
function initChecklist() {
    const items = document.querySelectorAll(".checklist-item");
    const circleBar = document.getElementById("circular-progress-bar");
    const circleText = document.getElementById("circular-progress-text");
    const resetBtn = document.getElementById("reset-checklist-btn");

    const recomputeProgress = () => {
        const checkedCount = STATE.checklist.filter(Boolean).length;
        const total = STATE.checklist.length;
        const pct = Math.round((checkedCount / total) * 100);

        // Update Text
        circleText.textContent = `${pct}%`;

        // Update Circle SVG
        // Circumference is 175.9 (r=28)
        const offset = 175.9 - (175.9 * pct) / 100;
        circleBar.style.strokeDashoffset = offset;

        // Render checklist UI classes
        items.forEach((item, index) => {
            if (STATE.checklist[index]) {
                item.classList.add("checked");
            } else {
                item.classList.remove("checked");
            }
        });
    };

    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            // Toggle
            STATE.checklist[index] = !STATE.checklist[index];
            localStorage.setItem("vf_checklist", JSON.stringify(STATE.checklist));
            recomputeProgress();
        });
    });

    resetBtn.addEventListener("click", () => {
        STATE.checklist = [false, false, false, false, false];
        localStorage.setItem("vf_checklist", JSON.stringify(STATE.checklist));
        recomputeProgress();
    });

    // Initial render
    recomputeProgress();
}

// PDF Export Event Listeners
function initPdfExports() {
    // 1. Export Individual Business Blueprint Modal
    const modalPdfBtn = document.getElementById("modal-pdf-btn");
    if (modalPdfBtn) {
        modalPdfBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Avoid background modal dismiss
            document.body.classList.add("print-blueprint-only");
            window.print();
            document.body.classList.remove("print-blueprint-only");
        });
    }

    // 2. Export Calculator Simulation Projections Report
    const calcPdfBtn = document.getElementById("calc-pdf-btn");
    if (calcPdfBtn) {
        calcPdfBtn.addEventListener("click", () => {
            document.body.classList.add("print-calc-only");
            window.print();
            document.body.classList.remove("print-calc-only");
        });
    }

    // 3. Export Launch Checklist Action Plan
    const checklistPdfBtn = document.getElementById("checklist-pdf-btn");
    if (checklistPdfBtn) {
        checklistPdfBtn.addEventListener("click", () => {
            document.body.classList.add("print-checklist-only");
            window.print();
            document.body.classList.remove("print-checklist-only");
        });
    }
}
