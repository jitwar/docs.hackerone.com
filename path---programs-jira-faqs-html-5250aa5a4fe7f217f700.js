webpackJsonp([0x9415f0b3c073],{759:function(e,t){e.exports={data:{markdownRemark:{html:'<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Answer</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>The HackerOne markdown doesn\'t convert correctly to Jira. How can I convert the markdown correction to Jira?</td>\n<td>You can use a Jira optimized template by setting the escalation template to: \n<code>{{details_custom_jira}}</code>\n.</td>\n</tr>\n<tr>\n<td>What fields are supported in the bi-directional Jira integration?</td>\n<td>We currently support these 4 fields:\n<br>\n<ul>\n<li>\nSummary\n</li>\n<li>\n Description\n</li>\n<li>\nProject\n</li>\n<li>\nIssue_type\n</li>\n</ul>\nAll of the fields are required to correctly set up the Jira integration.\n<br>\n<br>\nIf you have an issue template that has more required fields than these 4, you need to update or create a new template to only require the 4 fields above.\n</br></td>\n</tr>\n<tr>\n<td>I have multiple HackerOne programs. Can I integrate each of these programs to the same Jira instance?</td>\n<td>Yes, you can integrate multiple HackerOne programs to the same Jira instance. If you\'re using Jira Cloud, you must first remove the "HackerOne for Jira" plugin and then follow steps 1-2 below.\n<br>\n<br>\nTo integrate Jira with multiple HackerOne programs:\n<ul>\n1. Follow all of the \n<a href="jira-server-integration.html">Jira Server steps</a>\n for the first program you want to integrate.\n</ul>\n<ul>\n2. For each subsequent program you need to add an integration for, only follow steps 12-16 in \n<a href="jira-server-integration.html">the Jira Server article</a>\n.\n<ul>\n<li>\nYou only need to follow steps 12-16 because the application link has already been created when integrating with your first program, and only 1 application link is needed to set up a Jira integration.\n</li>\n</ul>\n</ul></td>\n</tr>\n<tr>\n<td>My Jira is behind a firewall and is not externally accessible. How can I integrate with Jira?</td>\n<td>To use the bi-directional Jira integration, you need to make sure your Jira instance is accessible from the HackerOne system. You can whitelist HackerOne’s IP addresses in your firewall to only open it up to the HackerOne application. Contact your program manager to request our IP addresses to whitelist in your firewall.\n<br>\n<br>\nIf you don\'t want to expose your Jira to HackerOne, \n<a href="https://support.hackerone.com/hc/en-us/requests/new">contact us</a>\n to get a work-around that enables you to only escalate to Jira.</td>\n</tr>\n<tr>\n<td>Can I set up a one-way integration instead of a bi-directional one?</td>\n<td>Yes! To set up a one-way integration, \n<a href="https://support.hackerone.com/hc/en-us/requests/new">contact HackerOne</a>\n with the following information: \n<br>\n<ul>\n<li>\nThe base URI of the JIRA instance (e.g., "\n<a href="https://jira.company.com/%22">https://jira.company.com/"</a>\n)\n</li>\n<li>\nProject ID ("pid") of the project you\'d like issues to default to (usually a 5 digit int)\n</li>\n<li>\nIssue Type ("issuetype") for the default type (usually a 1 digit int)\n</li>\n<li>\nAny other custom tags/fields you\'d like pre-populated. Options are described here: \n<a href="https://confluence.atlassian.com/display/JIRAKB/Creating+Issues+via+direct+HTML+links">https://confluence.atlassian.com/display/JIRAKB/Creating+Issues+via+direct+HTML+links</a></td>\n</tr>\n</tbody>\n</table>',frontmatter:{path:"/programs/jira-faqs.html",id:"programs/jira-faqs",title:"Jira FAQs",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-jira-faqs-html-5250aa5a4fe7f217f700.js.map