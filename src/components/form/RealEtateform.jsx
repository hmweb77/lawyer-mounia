"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PersonalInfoForm from './PersonalInfo';
import SuccessMessage from '../SuccessMessage';


const RealEstateForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        currentCountry: ''
      },
      projectStatus: '',
    transactionType: '', // 'buy' or 'sell'
    budget: '', // for buying
    projectStage: {
      searching: false,
      identifiedProperty: false,
      submittedOffer: false,
      offerAccepted: false,
      promiseSigned: false,
      deedSigned: false,
      promiseDate: '',
      deedDate: '',
    },
    sellingStage: {
      considering: false,
      listed: false,
      offerAccepted: false,
      promiseSigned: false,
      deedSigned: false,
      promiseDate: '',
      deedDate: '',
    },
    other: '',
    termsAccepted: false
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const budgetRanges = [
    '< 250.000€',
    '250.000€ - 500.000€',
    '500.000€ - 1.000.000€',
    '> 1.000.000€'
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return <SuccessMessage />;
  }


  return (
    <div className="max-w-2xl mx-auto p-6 mb-4 bg-white rounded-xl shadow-lg" style={{
      backgroundImage: "url('/blob-scene-haikei (2).svg')",
      backgroundSize: 'cover', // Or 'contain', depending on your preference
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <motion.form 
        initial="hidden"
        animate="visible"
        className="space-y-6"
        onSubmit={handleSubmit} 
      >
         <PersonalInfoForm 
          formData={formData}
          onFormDataChange={setFormData}
        />
        {/* Transaction Type Selection */}
        <motion.section variants={fadeIn} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Type of Transaction</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="transactionType"
                value="buy"
                className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                onChange={(e) => setFormData({ ...formData, transactionType: e.target.value })}
                checked={formData.transactionType === 'buy'}
              />
              <span className="text-gray-700">Buy Property</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="transactionType"
                value="sell"
                className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                onChange={(e) => setFormData({ ...formData, transactionType: e.target.value })}
                checked={formData.transactionType === 'sell'}
              />
              <span className="text-gray-700">Sell Property</span>
            </label>
          </div>
        </motion.section>

        {/* Buying Section */}
        {formData.transactionType === 'buy' && (
          <motion.section variants={fadeIn} className="space-y-6">
            {/* Budget Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Purchase Budget</h3>
              <div className="space-y-2">
                {budgetRanges.map((range) => (
                  <label key={range} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="budget"
                      value={range}
                      className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      checked={formData.budget === range}
                    />
                    <span className="text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Stage */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Project Stage</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                    onChange={(e) => setFormData({
                      ...formData,
                      projectStage: { ...formData.projectStage, searching: e.target.checked }
                    })}
                  />
                  <span className="text-gray-700">Currently searching for property</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                    onChange={(e) => setFormData({
                      ...formData,
                      projectStage: { ...formData.projectStage, identifiedProperty: e.target.checked }
                    })}
                  />
                  <span className="text-gray-700">Identified specific property and want to submit offer</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                    onChange={(e) => setFormData({
                      ...formData,
                      projectStage: { ...formData.projectStage, submittedOffer: e.target.checked }
                    })}
                  />
                  <span className="text-gray-700">Submitted an offer</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                    onChange={(e) => setFormData({
                      ...formData,
                      projectStage: { ...formData.projectStage, offerAccepted: e.target.checked }
                    })}
                  />
                  <span className="text-gray-700">Offer has been accepted</span>
                </label>

                {formData.projectStage.offerAccepted && (
                  <div className="ml-7">
                    <label className="block text-sm font-medium text-gray-700">
                      Promise of sale ("CPCV") expected before:
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                        onChange={(e) => setFormData({
                          ...formData,
                          projectStage: { ...formData.projectStage, promiseDate: e.target.value }
                        })}
                      />
                    </label>
                  </div>
                )}

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                    onChange={(e) => setFormData({
                      ...formData,
                      projectStage: { ...formData.projectStage, promiseSigned: e.target.checked }
                    })}
                  />
                  <span className="text-gray-700">Signed promise of sale ("CPCV")</span>
                </label>

                {formData.projectStage.promiseSigned && (
                  <div className="ml-7">
                    <label className="block text-sm font-medium text-gray-700">
                      Notarial deed ("escritura") expected before:
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                        onChange={(e) => setFormData({
                          ...formData,
                          projectStage: { ...formData.projectStage, deedDate: e.target.value }
                        })}
                      />
                    </label>
                  </div>
                )}

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                    onChange={(e) => setFormData({
                      ...formData,
                      projectStage: { ...formData.projectStage, deedSigned: e.target.checked }
                    })}
                  />
                  <span className="text-gray-700">Signed notarial deed</span>
                </label>
              </div>
            </div>
          </motion.section>
        )}

        {/* Selling Section */}
        {formData.transactionType === 'sell' && (
          <motion.section variants={fadeIn} className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800">Selling Stage</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    sellingStage: { ...formData.sellingStage, considering: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Currently considering selling</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    sellingStage: { ...formData.sellingStage, listed: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Property is listed</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    sellingStage: { ...formData.sellingStage, offerAccepted: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Accepted an offer</span>
              </label>

              {formData.sellingStage.offerAccepted && (
                <div className="ml-7">
                  <label className="block text-sm font-medium text-gray-700">
                    Promise of sale ("CPCV") expected before:
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                      onChange={(e) => setFormData({
                        ...formData,
                        sellingStage: { ...formData.sellingStage, promiseDate: e.target.value }
                      })}
                    />
                  </label>
                </div>
              )}

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    sellingStage: { ...formData.sellingStage, promiseSigned: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Signed promise of sale ("CPCV")</span>
              </label>

              {formData.sellingStage.promiseSigned && (
                <div className="ml-7">
                  <label className="block text-sm font-medium text-gray-700">
                    Notarial deed ("escritura") expected before:
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                      onChange={(e) => setFormData({
                        ...formData,
                        sellingStage: { ...formData.sellingStage, deedDate: e.target.value }
                      })}
                    />
                  </label>
                </div>
              )}

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    sellingStage: { ...formData.sellingStage, deedSigned: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Signed notarial deed</span>
              </label>
            </div>
          </motion.section>
        )}

        {/* Other Section */}
        <motion.section variants={fadeIn} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Other</h3>
          <div>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              placeholder="Please specify any other requirements or information"
              value={formData.other}
              onChange={(e) => setFormData({ ...formData, other: e.target.value })}
            />
          </div>
        </motion.section>

        {/* Terms Acceptance Checkbox */}
        <motion.div variants={fadeIn} className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              required
              className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
              onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
            />
            <span className="text-gray-700">By checking this box, I acknowledge that I have read and agree to the terms and conditions. I consent to the collection and processing of my personal data solely for the purpose of being contacted regarding my inquiry. My information will not be shared with third parties or used for any other purposes beyond this request.</span>
          </label>
        </motion.div>

        <motion.div variants={fadeIn} className="pt-6">
          <button
            type="submit"
            className="w-full bg-[#039B9B] text-white px-6 py-3 rounded-lg hover:bg-[#028787]] transition-colors font-semibold"
          >
            Submit Request
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default RealEstateForm;