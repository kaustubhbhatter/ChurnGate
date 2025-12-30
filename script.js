// Industry data
const industryData = {
    edtech: {
        icon: '📚',
        title: 'EdTech: Student Activation',
        subtitle: 'Prevent student dropout',
        description: `<p><strong>The Problem:</strong> EdTech platforms lose 30-40% of users in the first 2 weeks. Students sign up with excitement but abandon at activation (completing first assignment, joining a class).</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Detect when students view the course but don't submit first work</li>
            <li>Identify barriers: procrastination, confusion, technical issues</li>
            <li>Send personalized nudge emails with templates/examples to reduce friction</li>
        </ul>
        
        <p><strong>Impact:</strong> 9-15pp improvement in W2 activation rates. Example: Sharpener increased 58% → 67% retention.</p>`
    },
    saas: {
        icon: '💼',
        title: 'B2B SaaS: Trial-to-Paid',
        subtitle: 'Convert free trial users',
        description: `<p><strong>The Problem:</strong> 80% of SaaS trial users never convert. They experience product value but hesitate at payment due to price, procurement complexity, or unclear ROI.</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Track trial user engagement: feature usage, time in app, key interactions</li>
            <li>Diagnose barriers: feature confusion, pricing shock, integration complexity</li>
            <li>Send targeted emails: ROI calculators for finance buyers, feature tutorials for power users, pricing negotiations for hesitant prospects</li>
        </ul>
        
        <p><strong>Impact:</strong> 3-5x improvement in trial-to-paid conversion. Save $50K-200K in lost ARR per cohort.</p>`
    },
    healthtech: {
        icon: '🏥',
        title: 'HealthTech: Patient Retention',
        subtitle: 'Keep patients engaged',
        description: `<p><strong>The Problem:</strong> Telehealth and health apps see 40% patient churn after first use. Patients book one appointment, get help, but don't return for follow-ups or prevention.</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Monitor patient engagement: appointment frequency, prescription refills, symptom tracking</li>
            <li>Detect re-engagement opportunities: time since last visit, missed medication reminders</li>
            <li>Send personalized outreach: appointment reminders, preventive care tips, medication adherence nudges</li>
        </ul>
        
        <p><strong>Impact:</strong> 20-30% improvement in patient retention. Increase LTV by 2-3x through improved compliance.</p>`
    },
    fintech: {
        icon: '💳',
        title: 'Fintech: Card Usage Churn',
        subtitle: 'Drive transaction volume',
        description: `<p><strong>The Problem:</strong> Fintech users activate cards but don't use them. They download the app, verify identity, load funds—then abandon without making transactions.</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Track usage signals: time since signup, balance loaded, failed transactions</li>
            <li>Diagnose barriers: UX confusion, payment network issues, limited merchant availability</li>
            <li>Send contextual offers: cashback on first purchase, invite friends for rewards, merchant partnerships</li>
        </ul>
        
        <p><strong>Impact:</strong> 25-40% improvement in active user rate. Increase transaction volume by 3-5x within 60 days.</p>`
    },
    gaming: {
        icon: '🎮',
        title: 'Gaming: Player Engagement',
        subtitle: 'Reduce player churn',
        description: `<p><strong>The Problem:</strong> Mobile games see 50-70% D1 churn. Players download, play tutorial, then abandon before reaching core loop or progression.</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Track gameplay metrics: session length, levels completed, currency spent</li>
            <li>Identify friction points: tutorial abandonment, difficulty spikes, monetization walls</li>
            <li>Send re-engagement campaigns: early progression rewards, exclusive items, multiplayer invites</li>
        </ul>
        
        <p><strong>Impact:</strong> 15-25pp improvement in D7 retention. 2-3x increase in lifetime spend through targeted monetization.</p>`
    },
    ecommerce: {
        icon: '🛒',
        title: 'E-Commerce: Cart Abandonment',
        subtitle: 'Recover lost sales',
        description: `<p><strong>The Problem:</strong> 70% of shopping carts are abandoned. Users add items, start checkout, but drop off due to shipping costs, payment issues, or indecision.</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Monitor cart behavior: items added, checkout stage abandoned, time in cart</li>
            <li>Diagnose abandonment reason: high shipping, payment friction, price sensitivity</li>
            <li>Send personalized recovery emails: free shipping offers, limited-time discounts, alternative products</li>
        </ul>
        
        <p><strong>Impact:</strong> 10-15% recovery rate on abandoned carts. Add $50K+ in monthly revenue through automated recovery.</p>`
    },
    creators: {
        icon: '📱',
        title: 'Creator Platforms: Creator Dropout',
        subtitle: 'Retain content creators',
        description: `<p><strong>The Problem:</strong> Creator platforms lose 60% of creators within 3 months. Creators upload content, get low engagement, and abandon before building audience.</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Track creator activity: uploads, engagement rate, subscriber growth, earnings</li>
            <li>Identify struggles: low views, no monetization, algorithm confusion</li>
            <li>Send targeted support: collaboration opportunities, growth tips, exclusive creator tools</li>
        </ul>
        
        <p><strong>Impact:</strong> 30-40% improvement in creator retention. Increase platform GMV by 50%+ through retention of top creators.</p>`
    },
    fitness: {
        icon: '🏋️',
        title: 'Fitness: Membership Renewal',
        subtitle: 'Reduce churn at renewal',
        description: `<p><strong>The Problem:</strong> 40-50% of fitness app users don't renew after 6 months. Engagement drops post-onboarding, users skip workouts, and renewal notices get ignored.</p>
        
        <p><strong>ChurnGate Solution:</strong></p>
        <ul style="margin-left: 20px; color: #666;">
            <li>Monitor engagement: workout frequency, streak tracking, community interactions</li>
            <li>Detect churn signals: declining workout frequency, missed goal milestones</li>
            <li>Send re-engagement campaigns: personalized progress reports, challenge invites, renewal incentives 30 days before expiration</li>
        </ul>
        
        <p><strong>Impact:</strong> 15-20% improvement in renewal rate. Recover $100K+ in annual recurring revenue per 10K users.</p>`
    }
};

// Show industry modal
function showIndustryModal(industry) {
    const data = industryData[industry];
    if (!data) return;

    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalSubtitle').textContent = data.subtitle;
    document.getElementById('modalDescription').innerHTML = data.description;

    const modal = document.getElementById('industryModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close industry modal
function closeIndustryModal() {
    const modal = document.getElementById('industryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Click handlers for industry cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.industry-card').forEach(card => {
        card.addEventListener('click', function() {
            const industry = this.getAttribute('data-industry');
            showIndustryModal(industry);
        });
    });

    // Close modal when clicking overlay
    const modal = document.getElementById('industryModal');
    if (modal) {
        const overlay = modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', closeIndustryModal);
        }
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeIndustryModal();
        }
    });
});

// ===============================
// SIMULATION/DEMO FUNCTIONALITY
// ===============================

const profiles = {
    procrastinator: {
        risk: "HIGH",
        barrier: "Activation Failure",
        riskDesc: "No uploads submitted, trial expiring in 24 hours",
        barrierDesc: "User signed up but abandoned onboarding",
        reasoning: "User behavior shows classic <strong>activation failure</strong>: completed onboarding but abandoned at critical friction point (upload). Returned after 2 days, but browsed pricing instead of uploading. Procrastination + feature hesitation.",
        events: [
            { text: "signup_success [09:00] - New signup from Google", type: "normal" },
            { text: "onboarding_completed [09:15] - Finished profile setup", type: "normal" },
            { text: "dashboard_viewed [09:20] - Viewed main dashboard", type: "normal" },
            { text: "upload_abandoned [09:30] - ABANDONED WITHOUT SUBMITTING", type: "critical" },
            { text: "2_DAY_GAP [48h later] - No activity", type: "warning" },
            { text: "login [18:00 day 3] - Returned but hesitant", type: "normal" },
            { text: "view_pricing_page [18:05] - Looking for escape route", type: "warning" }
        ],
        email: `Subject: Your Free Review Expires in 24 Hours!

Hi Rahul,

I noticed you haven't submitted your first assignment yet.

Here's what I want you to know: we've pre-filled 3 templates (Math, Science, English) so you can literally paste your work and get instant AI feedback.

No need for perfection. Just rough draft → submit → get better.

Your free review expires in 24 hours.

[Upload Now] [View Templates]

The ChurnGate Team`
    },
    price_friction: {
        risk: "HIGH",
        barrier: "Price Friction",
        riskDesc: "Hit paywall 2x without converting",
        barrierDesc: "Loved the product (A- grade) but blocked by pricing",
        reasoning: "User behavior screams <strong>price friction</strong>: submitted assignment, got excellent grade (A-), engaged with feedback (2 mins), then HIT PAYWALL. Tried again next day, hit same paywall again, then abandoned. This is a willingness-to-pay issue, not a value gap.",
        events: [
            { text: "signup_success [11:00] - Signup from peer recommendation", type: "normal" },
            { text: "assignment_upload_completed [11:15] - Submitted first assignment", type: "normal" },
            { text: "grade_generated [11:20] - Grade A- received", type: "normal" },
            { text: "grade_viewed [11:25] - Spent 2 mins reading feedback", type: "normal" },
            { text: "paywall_modal_shown [next day 10:05] - HIT PAYWALL", type: "critical" },
            { text: "view_pricing_page [10:10] - Evaluated prices", type: "warning" },
            { text: "paywall_modal_shown [1 day later 15:05] - HIT SAME PAYWALL AGAIN", type: "critical" },
            { text: "exit_intent [15:10] - LEFT WITHOUT CONVERTING", type: "critical" }
        ],
        email: `Subject: You're Ready for the Next Level

Hi Priya,

Your Java assignment scored A-! 🎉

I see you've tried to submit again but hit our limit. Here's what I'm doing: I'm giving you a 7-day extension to test unlimited submissions at zero cost.

No strings. No credit card.

[Claim Your Extension]

If you want to commit now: 20% off annual plans.

The ChurnGate Team`
    },
    value_gap: {
        risk: "MEDIUM",
        barrier: "Value Gap",
        riskDesc: "Used product once, then disappeared",
        barrierDesc: "Got feedback (B-) but didn't see improvement path",
        reasoning: "<strong>Value gap</strong>: User got feedback but didn't see a clear path to improvement. Spent only 45 seconds reading B- feedback, then downloaded and left. No re-engagement for 6 days. They need to see the transformation story.",
        events: [
            { text: "signup_success [08:00] - Signup from peer recommendation", type: "normal" },
            { text: "assignment_upload_completed [08:30] - Uploaded Economics essay", type: "normal" },
            { text: "grade_generated [08:45] - Grade B- received", type: "normal" },
            { text: "grade_viewed [08:50] - ONLY 45 SECONDS (rushed)", type: "warning" },
            { text: "feedback_downloaded [09:00] - Downloaded & left", type: "normal" },
            { text: "6_DAYS_IDLE [6 days later] - No activity since", type: "critical" },
            { text: "email_open [1 week later] - Finally opened welcome email", type: "normal" }
        ],
        email: `Subject: Your B- → A- Roadmap

Hi Arjun,

You scored B- on Economics 101. I found the 3 gaps holding you back:

❌ Elasticity math concept (missing)
❌ Phillips Curve interpretation (unclear)
✅ Aggregate Supply (nailed it!)

Try our Rewrite Assistant (free 24h) on just those 2 concepts. Resubmit. Get re-graded.

[Start Rewrite Assistant]

You've got this,
ChurnGate AI`
    },
    low_engagement: {
        risk: "MEDIUM",
        barrier: "Low Engagement",
        riskDesc: "Minimal feature exploration",
        barrierDesc: "User completed one assignment, minimal feedback engagement",
        reasoning: "<strong>Low engagement</strong>: User went through motions but didn't deeply engage with feedback or explore advanced features. Spent <1 minute on grade, no secondary actions. Need to show them what they're missing.",
        events: [
            { text: "signup_success [10:00] - Onboarded", type: "normal" },
            { text: "assignment_upload [10:30] - Submitted assignment", type: "normal" },
            { text: "grade_viewed [10:35] - 45 SECONDS ONLY", type: "warning" },
            { text: "session_end [10:37] - Left platform", type: "critical" },
            { text: "3_DAYS_NO_RETURN - No login", type: "critical" }
        ],
        email: `Subject: You've Unlocked Your Assignment Grade

Hi there,

You got your Economics assignment back with detailed feedback. But I think you're missing the bigger picture.

Our Rewrite Assistant shows you EXACTLY what to fix, then lets you resubmit for instant re-grading.

Most students jump from B- → A- in one session.

[See What Changed]

The ChurnGate Team`
    },
    feature_confusion: {
        risk: "HIGH",
        barrier: "Feature Confusion",
        riskDesc: "Confused about how to use advanced features",
        barrierDesc: "Clicked on features but didn't complete actions",
        reasoning: "<strong>Feature confusion</strong>: User explored features (rewrite assistant, integration, peer review) but abandoned all of them within 30 seconds. They need clear, step-by-step guidance on what each feature does.",
        events: [
            { text: "signup_success [09:00]", type: "normal" },
            { text: "assignment_submitted [09:30]", type: "normal" },
            { text: "rewrite_assistant_opened [10:00] - Opened, closed in 20 sec", type: "warning" },
            { text: "integration_page_clicked [10:10] - Clicked, abandoned", type: "warning" },
            { text: "peer_review_opened [10:15] - Opened, 15 sec", type: "warning" },
            { text: "confusing_ui_search [10:20] - Searched 'how to'", type: "critical" },
            { text: "session_end [10:25]", type: "critical" }
        ],
        email: `Subject: Confused About Our Tools? (3-Minute Video)

Hi there,

I noticed you explored our Rewrite Assistant, integrations, and peer review features but they seemed confusing.

I made a 3-minute video that breaks down exactly what each one does and why you need them.

[Watch 3-Minute Setup Guide]

No guessing. Just clarity.

The ChurnGate Team`
    },
    time_constraint: {
        risk: "MEDIUM",
        barrier: "Time Constraint",
        riskDesc: "Rushing through platform, signs of time pressure",
        barrierDesc: "User appears to be juggling multiple commitments",
        reasoning: "<strong>Time constraint</strong>: User logs in late at night, spends <2 min per session, submits assignments without reading feedback thoroughly. They need a faster, streamlined workflow—not more features.",
        events: [
            { text: "login [23:00] - Late night login", type: "warning" },
            { text: "assignment_upload [23:02] - Rushed submission", type: "normal" },
            { text: "grade_viewed [23:03] - 30 SECONDS", type: "critical" },
            { text: "session_end [23:05] - Immediate exit", type: "normal" },
            { text: "2_DAYS_LATER_REPEAT - Same pattern", type: "warning" },
            { text: "support_page_visited [02:15] - Middle of night", type: "warning" }
        ],
        email: `Subject: Save 5 Hours/Week on Your Assignments

Hi there,

I noticed you're submitting late at night and rushing through feedback. You don't have time for perfection—you need efficiency.

We just launched Quick Review: same AI feedback, delivered in 60 seconds. No fluff.

[Try Quick Review]

The ChurnGate Team`
    }
};

let currentProfile = null;

function handleProfileChange() {
    const selected = document.getElementById('profileSelect').value;
    if (selected !== currentProfile) {
        resetAnalysis();
        currentProfile = selected;
    }
}

async function runAnalysis() {
    const selected = document.getElementById('profileSelect').value;
    if (!selected) {
        alert('Please select a profile');
        return;
    }

    const profile = profiles[selected];
    const resultsArea = document.getElementById('resultsArea');
    
    document.getElementById('analyzeBtn').disabled = true;
    resultsArea.classList.add('show');

    // Step 1: Fetching
    setStepActive('step1');
    await sleep(800);
    setStepCompleted('step1');

    // Step 2: Stream Events
    setStepActive('step2');
    await streamEvents(profile.events);
    setStepCompleted('step2');

    // Step 3: AI Reasoning
    setStepActive('step3');
    await showReasoning(profile.reasoning);
    setStepCompleted('step3');

    // Step 4: Show Results
    setStepActive('step4');
    await sleep(600);
    setStepCompleted('step4');
    showResults(profile);

    document.getElementById('analyzeBtn').disabled = false;
}

function setStepActive(stepId) {
    document.querySelectorAll('.pipeline-step').forEach(s => {
        s.classList.remove('active');
    });
    const step = document.getElementById(stepId);
    step.classList.add('active');
    step.innerHTML = `<div class="step-label">Processing</div><div class="step-content"><span class="spinner"></span></div>`;
}

function setStepCompleted(stepId) {
    const step = document.getElementById(stepId);
    step.classList.remove('active');
    step.classList.add('completed');
    const labels = ['Fetching Events', 'Detect Signals', 'AI Reasoning', 'Results'];
    const index = stepId.charCodeAt(4) - 49;
    step.innerHTML = `<div class="step-label">✓ Complete</div><div class="step-content">${labels[index]}</div>`;
}

async function streamEvents(events) {
    const eventsStreamContainer = document.getElementById('eventsStreamContainer');
    const eventsStream = document.getElementById('eventsStream');
    
    eventsStreamContainer.style.display = 'block';
    eventsStream.innerHTML = '';

    for (let i = 0; i < events.length; i++) {
        const eventItem = document.createElement('div');
        eventItem.className = `event-item ${events[i].type}`;
        const icon = events[i].type === 'critical' ? '🚨' : (events[i].type === 'warning' ? '⚠️' : '✓');
        eventItem.textContent = `${icon} ${events[i].text}`;
        eventsStream.appendChild(eventItem);
        eventsStream.scrollTop = eventsStream.scrollHeight;
        await sleep(120);
    }
}

async function showReasoning(reasoning) {
    const reasoningSection = document.getElementById('reasoningSection');
    const reasoningContent = document.getElementById('reasoningContent');
    
    reasoningSection.classList.add('show');
    reasoningContent.innerHTML = reasoning;
    await sleep(1000);
}

function showResults(profile) {
    const resultsGrid = document.getElementById('resultsGrid');
    const interventionSection = document.getElementById('interventionSection');
    
    document.getElementById('riskLevel').textContent = profile.risk;
    document.getElementById('riskDesc').textContent = profile.riskDesc;
    document.getElementById('barrier').textContent = profile.barrier;
    document.getElementById('barrierDesc').textContent = profile.barrierDesc;
    document.getElementById('emailContent').textContent = profile.email;

    // Update risk styling
    const riskCard = resultsGrid.querySelector('.result-card');
    riskCard.className = 'result-card';
    if (profile.risk === 'HIGH') {
        riskCard.classList.add('risk-high');
    } else {
        riskCard.classList.add('risk-medium');
    }

    resultsGrid.style.display = 'grid';
    interventionSection.classList.add('show');
}

function resetAnalysis() {
    document.getElementById('resultsArea').classList.remove('show');
    document.getElementById('eventsStreamContainer').style.display = 'none';
    document.getElementById('eventsStream').innerHTML = '';
    document.getElementById('reasoningSection').classList.remove('show');
    document.getElementById('resultsGrid').style.display = 'none';
    document.getElementById('interventionSection').classList.remove('show');
    
    document.querySelectorAll('.pipeline-step').forEach(step => {
        step.classList.remove('active', 'completed');
        const index = step.id.charCodeAt(4) - 49;
        const labels = ['Fetching Events', 'Detect Signals', 'AI Reasoning', 'Results'];
        step.innerHTML = `<div class="step-label">Step ${index + 1}</div><div class="step-content">${labels[index]}</div>`;
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}