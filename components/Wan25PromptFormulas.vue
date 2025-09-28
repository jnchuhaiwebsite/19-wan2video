<template>
  <section class="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-15">
      <div class="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-orange-200 to-red-200 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
          Prompt Formulas
        </div>
        <h2 class="text-3xl md:text-4xl font-normal bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-8 leading-tight">
          Wan 2.5 Prompt Formulas
        </h2>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
          Prompts are used to describe the <span class="font-semibold text-amber-600">content and motion</span> within a video. 
          They are the key factor that controls the <span class="font-semibold text-orange-600">visual output</span> and overall effect. 
          The more <span class="font-semibold text-red-600">complete, precise, and detailed</span> the prompt, the higher the quality of the generated video.
        </p>
      </div>

      <!-- Formula Cards -->
      <div class="grid md:grid-cols-2 gap-8 mb-20">
        <!-- Basic Formula -->
        <div class="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 hover:border-amber-200">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">1. Basic Formula</h3>
              <div class="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
                <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                For Beginners
              </div>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-gray-600 mb-4">
              <strong>Best for:</strong> beginners trying AI video for the first time or users looking for quick inspiration. Simple and flexible prompts can produce highly imaginative results.
            </p>
            
            <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-4">
              <h4 class="font-semibold text-gray-900 mb-3 text-center">Formula</h4>
              <div class="text-center font-mono text-amber-800 bg-white/70 rounded-lg p-3">
                Prompt = Subject + Scene + Motion
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
                </div>
                <div>
                  <strong class="text-gray-900">Subject:</strong>
                  <span class="text-gray-600"> the main focus of the video (a person, animal, object, plant, or imagined element).</span>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                </div>
                <div>
                  <strong class="text-gray-900">Scene:</strong>
                  <span class="text-gray-600"> the environment where the subject is placed (background, foreground, real-world space, or fictional setting).</span>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <div>
                  <strong class="text-gray-900">Motion:</strong>
                  <span class="text-gray-600"> the specific movement of the subject or environmental dynamics (static, small movement, large movement, partial motion, or overall action).</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Advanced Formula -->
        <div class="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 hover:border-orange-200">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">2. Advanced Formula</h3>
              <div class="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                For Experts
              </div>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-gray-600 mb-4">
              <strong>Best for:</strong> experienced users aiming for higher video quality, vividness, and storytelling.
            </p>
            
            <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 mb-4">
              <h4 class="font-semibold text-gray-900 mb-3 text-center">Formula</h4>
              <div class="text-center font-mono text-orange-800 bg-white/70 rounded-lg p-3 text-sm">
                Subject (detailed) + Scene (detailed) + Motion (detailed) + Aesthetic Controls + Stylization
              </div>
            </div>

            <div class="space-y-3 text-sm">
              <div>
                <strong class="text-gray-900">Subject Description:</strong>
                <span class="text-gray-600"> detailed attributes using adjectives or phrases.</span>
                <div class="text-xs text-orange-600 italic mt-1">Example: "A black-haired Miao ethnic girl in traditional dress"</div>
              </div>
              
              <div>
                <strong class="text-gray-900">Motion Description:</strong>
                <span class="text-gray-600"> specifics including amplitude, speed, and effect.</span>
                <div class="text-xs text-orange-600 italic mt-1">Example: "Swinging violently," "Moving slowly"</div>
              </div>
              
              <div>
                <strong class="text-gray-900">Aesthetic Controls:</strong>
                <span class="text-gray-600"> lighting, perspective, shot size, camera angles.</span>
              </div>
              
              <div>
                <strong class="text-gray-900">Stylization:</strong>
                <span class="text-gray-600"> overall artistic style.</span>
                <div class="text-xs text-orange-600 italic mt-1">Example: "Cyberpunk," "Line art illustration"</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image-to-Video Formula -->
        <div class="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100 hover:border-red-200">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">3. Image-to-Video Formula</h3>
              <div class="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                <span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                I2V Mode
              </div>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-gray-600 mb-4">
              <strong>Best for:</strong> when the image already defines the subject, scene, and style. The prompt focuses on describing dynamic action and camera movements.
            </p>
            
            <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 mb-4">
              <h4 class="font-semibold text-gray-900 mb-3 text-center">Formula</h4>
              <div class="text-center font-mono text-red-800 bg-white/70 rounded-lg p-3">
                Prompt = Motion + Camera Movement
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <div>
                  <strong class="text-gray-900">Motion:</strong>
                  <span class="text-gray-600"> describe dynamic actions of elements from the image. Control intensity and speed with adverbs like "quickly" or "slowly."</span>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                </div>
                <div>
                  <strong class="text-gray-900">Camera Movement:</strong>
                  <span class="text-gray-600"> specify lens movement if needed.</span>
                  <div class="text-xs text-red-600 italic mt-1">Example: "Zoom in," "Pan left," or "Fixed camera"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Audio Formula -->
        <div class="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 hover:border-purple-200">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">4. Audio Formula</h3>
              <div class="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Exclusive to Wan 2.5
              </div>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-gray-600 mb-4">
              <strong>Best for:</strong> generating video with synchronized voices, sound effects, and background music for enhanced immersion.
            </p>
            
            <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mb-4">
              <h4 class="font-semibold text-gray-900 mb-3 text-center">Formula</h4>
              <div class="text-center font-mono text-purple-800 bg-white/70 rounded-lg p-3 text-sm">
                Subject + Scene + Motion + Audio Description
              </div>
            </div>

            <div class="space-y-3 text-sm">
              <div>
                <strong class="text-gray-900">Voice:</strong>
                <span class="text-gray-600"> "Spoken content" + Emotion + Tone + Speed + Timbre + Accent</span>
                <div class="text-xs text-purple-600 italic mt-1">Example: "A man says: 'Study hard,' in a relaxed tone, American accent."</div>
              </div>
              
              <div>
                <strong class="text-gray-900">Sound Effects:</strong>
                <span class="text-gray-600"> Source material + Action + Ambient sound</span>
                <div class="text-xs text-purple-600 italic mt-1">Example: "Glass marble drops onto wooden floor, making a 'clink' sound."</div>
              </div>
              
              <div>
                <strong class="text-gray-900">Background Music:</strong>
                <span class="text-gray-600"> Music + Style</span>
                <div class="text-xs text-purple-600 italic mt-1">Example: "Rainy night with suspenseful background music."</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tips Section -->
      <div class="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-3xl p-10 border border-amber-100">
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            💡 Pro Tips for Better Results
          </h3>
          <div class="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 rounded-full mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Be Specific</h4>
            <p class="text-gray-600 text-sm">The more detailed and specific your prompt, the better the AI understands your vision.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Experiment</h4>
            <p class="text-gray-600 text-sm">Try different combinations of formulas to discover unique styles and effects.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Start Simple</h4>
            <p class="text-gray-600 text-sm">Begin with basic formulas and gradually add complexity as you gain experience.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
